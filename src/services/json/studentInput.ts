import type { StudentFormType } from "../validation/student.validation"

export const studentInputs: {
  name: keyof StudentFormType
  label: string
  placeholder: string
  type: string
}[] = [
  { name: "name", label: "Name", placeholder: "Enter student name", type: "text" },
  { name: "email", label: "Email", placeholder: "Enter student email", type: "email" },
  { name: "age", label: "Age", placeholder: "Enter age (3 - 19)", type: "number" },
  { name: "course", label: "Course", placeholder: "Enter course", type: "text" },
  // image has its own upload box in StudentForm
]
