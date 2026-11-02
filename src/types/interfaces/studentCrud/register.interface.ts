import type { FieldErrors, UseFormRegister } from "react-hook-form"
import type { StudentFormType } from "../../../services/validation/student.validation"

export interface RegisterComponentProps {
  label: string
  name: keyof StudentFormType
  placeholder: string
  type: string
  register: UseFormRegister<StudentFormType>
  error?: FieldErrors<StudentFormType>
}
