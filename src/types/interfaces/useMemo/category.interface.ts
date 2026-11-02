import type { Control } from "react-hook-form";
import type { ProductInputs } from "../../type/ProductForm.type";

export interface CategoryCardProps {
  control: Control<ProductInputs>; // stable reference from useForm
  error?: string;
}