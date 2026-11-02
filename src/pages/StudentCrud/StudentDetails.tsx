import { useEffect, useState } from "react"
import { Alert, Avatar, Box, Button, CircularProgress, Container, Paper, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router-dom"
import { toast } from "sonner"
import { PATHS } from "../../routes/paths"

import { getStudentByIdFns, deleteStudentFns } from "../../api/api-function/student.function"
import type { StudentItem } from "../../types/interfaces/studentCrud/student.interface"
import { getImageUrl } from "../../services/helper/image"

// DETAILS page: GET one student (+ delete)
const StudentDetails = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [student, setStudent] = useState<StudentItem | null>(null)
  const [loading, setLoading] = useState(true)
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

  const handleDelete = async () => {
    if (!window.confirm("Delete this student?")) return
    const res = await deleteStudentFns(id as string)
    if (res.success) {
      toast.success(res.message)
      navigate(PATHS.students)
    } else {
      toast.error(res.message)
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ mb: 2 }}>Student Details</Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}

      {student && (
        <Paper sx={{ p: 3 }}>
          <Avatar src={getImageUrl(student.image)} variant="rounded" sx={{ width: 120, height: 120, mb: 2 }}>
            {student.name.charAt(0).toUpperCase()}
          </Avatar>
          <Typography><b>Name:</b> {student.name}</Typography>
          <Typography><b>Email:</b> {student.email}</Typography>
          <Typography><b>Age:</b> {student.age}</Typography>
          <Typography><b>Course:</b> {student.course}</Typography>
          {student.createdAt && (
            <Typography><b>Added on:</b> {new Date(student.createdAt).toLocaleString()}</Typography>
          )}

          <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
            <Button variant="outlined" component={Link} to={PATHS.students}>Back</Button>
            <Button variant="contained" component={Link} to={PATHS.studentEdit(student._id)}>Edit</Button>
            <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
          </Box>
        </Paper>
      )}
    </Container>
  )
}

export default StudentDetails