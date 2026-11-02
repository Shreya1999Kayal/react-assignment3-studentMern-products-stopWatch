import type { RegisterComponentProps } from "../../types/interfaces/studentCrud/register.interface"
import { TextField } from "@mui/material"



const RegisterComponent = ({
  label,
  name,
  placeholder,
  type,
  register,
  error,
}: RegisterComponentProps) => {
  return (
    <TextField
      {...register(name)}
      label={label}
      placeholder={placeholder}
      type={type}
      fullWidth
      margin="dense"
      error={!!error?.[name]}
      helperText={error?.[name]?.message as string | undefined}
    />
  )
}

export default RegisterComponent