import React, { memo } from "react";
import TextField from "@mui/material/TextField";
import type { InputFieldProps } from "../../types/interfaces/useMemo/inputField.interface";

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  placeholder,
  type,
  isNumber,
  register,
  error,
}) => {
  // DEBUG: prints every time THIS field re-renders
  console.log(`InputField rendering -> ${name}`);

  // MUI TextField needs inputRef (not ref), so split ref out of register()
  const { ref, ...rest } = register(name, isNumber ? { valueAsNumber: true } : undefined);

  return (
    <TextField
      {...rest}
      inputRef={ref}
      label={label}
      type={type}
      placeholder={placeholder}
      error={!!error}
      helperText={error}
      fullWidth
      size="small"
      slotProps={{
        inputLabel: { shrink: true }, // keeps label above the box, so it never overlaps the value
        htmlInput: isNumber ? { step: "any" } : undefined,
      }}
    />
  );
};

// memo => re-render only if a prop changed
export default memo(InputField);