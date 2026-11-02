import type { ProductInputs } from "../../type/ProductForm.type";


export interface ProductInputConfig {
  name: keyof ProductInputs;
  label: string;
  placeholder: string;
  type: "text" | "number";
  isNumber?: boolean; // true -> register(name, { valueAsNumber: true })
}