import type { StudentFormType } from "../../services/validation/student.validation"
import type { StudentItem } from "../interfaces/studentCrud/student.interface"

export type StudentFormProps = {
  onSubmit: (data: StudentFormType) => Promise<void>
  loading: boolean
  submitLabel: string
  defaultValues?: StudentItem | null
}

export type StudentTableProps = {
  students: StudentItem[]
  loading: boolean
  handleDelete: (id: string) => Promise<void>
}

export type StudentRowCardProps = {
  row: StudentItem
  handleDelete: (id: string) => Promise<void>
}