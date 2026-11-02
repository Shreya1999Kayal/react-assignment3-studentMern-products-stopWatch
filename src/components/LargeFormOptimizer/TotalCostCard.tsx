import React, { memo } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import type { TotalCostCardProps } from "../../types/interfaces/useMemo/totalCost.interface";

const TotalCostCard: React.FC<TotalCostCardProps> = ({ summary }) => {
  console.log("TotalCostCard rendering", summary);

  return (
    <Paper variant="outlined" className="p-4 bg-indigo-50 border-indigo-200">
      <Typography variant="body2">Subtotal: {summary.subtotal.toFixed(2)}</Typography>
      <Typography variant="body2">Discount: - {summary.discountAmount.toFixed(2)}</Typography>
      <Typography variant="subtitle1" className="font-bold text-indigo-700">
        Total Cost: {summary.total.toFixed(2)}
      </Typography>
    </Paper>
  );
};

export default memo(TotalCostCard);