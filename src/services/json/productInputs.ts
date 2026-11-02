import type { ProductInputConfig } from "../../types/interfaces/useMemo/productInputs.interface";



export const productInputs: ProductInputConfig[] = [
  { name: "name", label: "Product Name", placeholder: "Enter product name", type: "text" },
  { name: "brand", label: "Brand", placeholder: "Enter brand", type: "text" },
  { name: "price", label: "Price", placeholder: "Enter price", type: "number", isNumber: true },
  { name: "quantity", label: "Quantity", placeholder: "Enter quantity", type: "number", isNumber: true },
  { name: "discount", label: "Discount (%)", placeholder: "0 - 100", type: "number", isNumber: true },
  { name: "colour", label: "Colour", placeholder: "Enter colour", type: "text" },
];