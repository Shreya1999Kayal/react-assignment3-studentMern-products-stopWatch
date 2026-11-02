import { getStudentByIdFns, updateStudentFns } from "../../api/api-function/student.function"
import type { StudentItem } from "../../types/interfaces/studentCrud/student.interface"
import type { StudentFormType } from "../../services/validation/student.validation"
import StudentForm from "../../components/StudentMern/StudentForm"
import { PATHS } from "../../routes/paths"
import { useEffect, useState } from "react"
import { Alert, CircularProgress, Container, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"



// EDIT page: GET one (fill form) + PUT
const EditStudent = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [student, setStudent] = useState<StudentItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchStudent = async () => {
      setLoading(true)
      const res = await getStudentByIdFns(id as string)
      console.log("One Student - ", res)
      if (res.success) {
        setStudent(res.data)
      } else {
        setError(res.message)
        toast.error(res.message)
      }
      setLoading(false)
    }
    fetchStudent()
  }, [id])

  const onSubmit = async (data: StudentFormType) => {
    setIsSaving(true)
    const res = await updateStudentFns(id as string, data)
    console.log("Student update res - ", res)

    if (res.success) {
      toast.success(res.message)
      navigate(PATHS.students)
    } else {
      toast.error(res.message)
    }
    setIsSaving(false)
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mb: 2 }}>Edit Student</Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {student && (
        <StudentForm onSubmit={onSubmit} loading={isSaving} submitLabel="Update" defaultValues={student} />
      )}
    </Container>
  )
}

export default EditStudent