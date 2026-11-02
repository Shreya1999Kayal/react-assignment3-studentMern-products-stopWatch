import { useCallback, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import type { ProductInputs } from "../types/type/ProductForm.type";

import { productSchema } from "../services/validation/product.validation";
import { productInputs } from "../services/json/productInputs";
import type { CostSummary } from "../types/interfaces/useMemo/totalCost.interface";
import InputField from "../components/LargeFormOptimizer/InputField";
import CategoryCard from "../components/LargeFormOptimizer/CategoryCard";
import TotalCostCard from "../components/LargeFormOptimizer/TotalCostCard";
import AvailabilityCard from "../components/LargeFormOptimizer/AvailabilityCard";
import ImageCard from "../components/LargeFormOptimizer/ImageCard";
import Box from "@mui/material/Box";



const ProductForm = () => {
  // DEBUG 1: parent render
  console.log("ProductForm (parent) rendering");

  const [preview, setPreview] = useState<string | null>(null);
  const [showTotal, setShowTotal] = useState<boolean>(false)
  const previewUrlRef = useRef<string | null>(null); // to revoke old object URLs


  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProductInputs>({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: "",
      brand: "",
      category: "",
      discount: 0,
      colour: "",
      isAvailable: false,
    },
  });

  // Watch ONLY the 3 fields needed for the total.
  // Typing in other fields (name, brand, colour...) will NOT re-render this component.
  const [price, quantity, discount] = watch(["price", "quantity", "discount"]);

  // useMemo: derived data. Recalculates only when price / quantity / discount change.
  const costSummary: CostSummary = useMemo(() => {
    console.log("useMemo recalculating total...", { price, quantity, discount });

    const p = Number(price) ? price : 0;
    const q = Number(quantity) ? quantity : 0;
    const d = Number(discount) ? discount : 0;

    const subtotal = p * q;
    const discountAmount = (subtotal * d) / 100;
    return { subtotal, discountAmount, total: subtotal - discountAmount };
  }, [price, quantity, discount]);

  // useCallback: image handler keeps the same reference between renders
  const handleImageChange = useCallback(
    (file: File) => {
      console.log("handleImageChange (useCallback) called");
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
      const url = URL.createObjectURL(file);
      previewUrlRef.current = url;

      setValue("image", file, { shouldValidate: true }); // put file into form data
      setPreview(url);
    },
    [setValue]
  );

  const handleCalculate = useCallback(()=>{
    console.log("Calculate clicked ... ");
    setShowTotal(true)
  }, [])

  // useCallback: onSubmit
  const onSubmit = useCallback(
    (data: ProductInputs) => {
      console.log("onSubmit (useCallback) -> form data: ", data);
      reset();
      setShowTotal(false);
      setPreview(null);
      previewUrlRef.current = null;
    },
    [reset]
  );

  // useCallback: runs when validation fails
  const onInvalid = useCallback((formErrors: FieldErrors<ProductInputs>) => {
    console.log("❌ validation failed:", formErrors);
  }, []);

  return (
    <Box className="flex flex-1 items-center justify-center bg-gray-100 p-4">
      <Paper elevation={3} className="w-full max-w-md p-8 rounded-2xl">
        <Typography variant="h5" component="h2" className="mb-6 text-center font-bold">
          Add Product
        </Typography>

        <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate>
          <Stack spacing={2}>
            {/* Plain inputs from JSON: only the field's own error STRING is passed */}
            {productInputs.map((input) => (
              <InputField
                key={input.name}
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                type={input.type}
                isNumber={input.isNumber}
                register={register}
                error={errors[input.name]?.message as string | undefined}
              />
            ))}

            <CategoryCard control={control} error={errors.category?.message} />

            <AvailabilityCard control={control} />

            <ImageCard
              preview={preview}
              onImageChange={handleImageChange}
              error={errors?.image?.message}
            />

            <Button
              type="button"
              variant="outlined"
              size="large"
              fullWidth
              className="rounded-xl py-3 normal-case text-base font-semibold"
              onClick={handleCalculate}
            >
              Calculate
              
            </Button>

            {
                showTotal && <TotalCostCard summary={costSummary} />
            }



            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="rounded-full py-2.5 normal-case"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default ProductForm;