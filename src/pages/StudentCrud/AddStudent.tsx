import { useState } from "react"
import { Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { PATHS } from "../../routes/paths"

import { createStudentFns } from "../../api/api-function/student.function"
import type { StudentFormType } from "../../services/validation/student.validation"
import StudentForm from "../../components/StudentMern/StudentForm"

// ADD page: POST
const AddStudent = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (data: StudentFormType) => {
    setLoading(true)
    const res = await createStudentFns(data)
    console.log("Student add res - ", res)

    if (res.success) {
      toast.success(res.message)
      navigate(PATHS.students)
    } else {
      toast.error(res.message)
    }
    setLoading(false)
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mb: 2 }}>Add Student</Typography>
      <StudentForm onSubmit={onSubmit} loading={loading} submitLabel="Create" />
    </Container>
  )
}

export default AddStudent