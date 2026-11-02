import * as yup from "yup";

export const productSchema = yup.object({
  name: yup.string().trim().min(3, "Product name must be at least 3 characters.").required("Product name is required."),
  brand: yup.string().trim().required("Brand is required."),
  category: yup.string().required("Please select a category."),
  price: yup
    .number()
    .typeError("Price must be a number.")
    .positive("Price must be greater than 0.")
    .required("Price is required."),
  quantity: yup
    .number()
    .typeError("Quantity must be a number.")
    .integer("Quantity must be a whole number.")
    .min(1, "Quantity must be at least 1.")
    .required("Quantity is required."),
  discount: yup
    .number()
    .typeError("Discount must be a number.")
    .min(0, "Discount cannot be negative.")
    .max(100, "Discount cannot be more than 100.")
    .required("Discount is required."),
  colour: yup.string().trim().required("Colour is required."),
  isAvailable: yup.boolean().required(),
  image: yup.mixed<File>().required("Product image is required."),
});