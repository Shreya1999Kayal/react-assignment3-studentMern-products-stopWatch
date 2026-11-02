import React, { memo } from "react";
import { Controller } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import type { AvailabilityCardProps } from "../../types/interfaces/useMemo/availability.interface";

const AvailabilityCard: React.FC<AvailabilityCardProps> = ({ control }) => {
  console.log("AvailabilityCard rendering");

  // MUI Checkbox keeps its own state, so it must be used with Controller (not register)
  return (
    <Controller
      name="isAvailable"
      control={control}
      render={({ field }) => (
        <FormControlLabel
          label="Is Available"
          control={
            <Checkbox
              checked={!!field.value}
              onChange={(event) => field.onChange(event.target.checked)}
              slotProps={{ input: { ref: field.ref } }}
            />
          }
        />
      )}
    />
  );
};

export default memo(AvailabilityCard);