import React, { memo } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { categories } from "../../constants/product.constants";
import type { CategoryCardProps } from "../../types/interfaces/useMemo/category.interface";


const CategoryCard: React.FC<CategoryCardProps> = ({ control, error }) => {
  console.log("CategoryCard rendering");

  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => (
        <TextField
          select
          label="Category"
          value={field.value ?? ""}
          onChange={(event) => field.onChange(event.target.value)}
          onBlur={field.onBlur}
          inputRef={field.ref}
          error={!!error}
          helperText={error}
          fullWidth
          size="small"
          slotProps={{
            inputLabel: { shrink: true },
            select: { displayEmpty: true },
          }}
        >
          <MenuItem value="">Select Category</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default memo(CategoryCard);