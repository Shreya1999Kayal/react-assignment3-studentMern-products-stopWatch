// Result of the useMemo calculation in ProductForm
export interface CostSummary {
  subtotal: number;
  discountAmount: number;
  total: number;
}

export interface TotalCostCardProps {
  summary: CostSummary; // memoised object -> same reference until price/qty/discount change
}