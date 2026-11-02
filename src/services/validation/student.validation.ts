import * as yup from "yup"

// same rules as the backend (name 3-50, age 3-19, course min 2)
export const studentSchema = yup.object({
  name: yup.string().trim().min(3, "At least 3 characters").max(50, "Maximum 50 characters").required("Name is required"),
  email: yup.string().trim().email("Invalid email format.").required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .integer("Age must be a whole number")
    .min(3, "Age must be at least 3")
    .max(19, "Age cannot exceed 19")
    .required("Age is required"),
  course: yup.string().trim().min(2, "At least 2 characters").required("Course is required"),
  image: yup.mixed<File>().nullable(), // optional
})

export type StudentFormType = yup.InferType<typeof studentSchema>