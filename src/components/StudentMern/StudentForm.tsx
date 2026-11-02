import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Avatar, Box, Button, CircularProgress, FormHelperText } from "@mui/material"

import RegisterComponent from "./RegisterComponent"
import { studentInputs } from "../../services/json/studentInput"
import { studentSchema, type StudentFormType } from "../../services/validation/student.validation"
import { getImageUrl } from "../../services/helper/image"
import type { StudentFormProps } from "../../types/type/student.type"

// ONE form used by both Add and Edit pages
const StudentForm = ({ onSubmit, loading, submitLabel, defaultValues }: StudentFormProps) => {
  // preview of a NEWLY picked file; if none picked, show the saved image (Edit page)
  const [newPreview, setNewPreview] = useState<string | null>(null)
  const imagePreview = newPreview ?? getImageUrl(defaultValues?.image)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<StudentFormType>({
    resolver: yupResolver(studentSchema),
    defaultValues: { name: "", email: "", course: "", image: null },
  })

  // Edit page: fill the form when the student data arrives
  useEffect(() => {
    if (defaultValues) {
      reset({
        name: defaultValues.name,
        email: defaultValues.email,
        age: defaultValues.age,
        course: defaultValues.course,
        image: null,
      })
    }
  }, [defaultValues, reset])

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {studentInputs.map((i) => (
        <RegisterComponent
          key={i.name}
          label={i.label}
          name={i.name}
          placeholder={i.placeholder}
          type={i.type}
          register={register}
          error={errors}
        />
      ))}

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
        <Avatar src={imagePreview} variant="rounded" sx={{ width: 80, height: 80 }} />
        <Button variant="outlined" onClick={() => document.getElementById("student-upload")?.click()}>
          Upload Image (optional)
          <input
            id="student-upload"
            type="file"
            accept="image/*"
            hidden
            onChange={(event) => {
              const file = event.target.files?.[0]
              event.target.value = ""
              if (!file) return
              setValue("image", file, { shouldValidate: true })
              setNewPreview(URL.createObjectURL(file))
            }}
          />
        </Button>
      </Box>
      {errors.image && <FormHelperText error>{errors.image.message}</FormHelperText>}

      <Button type="submit" variant="contained" disabled={loading} sx={{ mt: 3 }}>
        {loading ? <CircularProgress size={20} /> : submitLabel}
      </Button>
    </Box>
  )
}

export default StudentForm