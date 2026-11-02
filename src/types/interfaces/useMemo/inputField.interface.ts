import type { UseFormRegister } from "react-hook-form";
import type { ProductInputs } from "../../type/ProductForm.type";

export interface InputFieldProps {
  label: string;
  name: keyof ProductInputs;
  placeholder: string;
  type: string;
  isNumber?: boolean;
  register: UseFormRegister<ProductInputs>; // stable reference from useForm
  error?: string; // ONLY this field's message (a string), not the whole errors object
}

