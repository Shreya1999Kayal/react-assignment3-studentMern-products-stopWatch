import { getStudentsFns, deleteStudentFns } from "../../api/api-function/student.function"
import type { StudentItem } from "../../types/interfaces/studentCrud/student.interface"
import StudentTable from "../../components/StudentMern/StudentTable"
import { PATHS } from "../../routes/paths"
import { useEffect, useState } from "react"
import { Alert, Box, Button, CircularProgress, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { toast } from "sonner"



// LIST page: GET all + DELETE
const Home = () => {
  const [students, setStudents] = useState<StudentItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true)
      setError("")
      const res = await getStudentsFns()
      console.log("All Students - ", res)
      if (res.success) {
        setStudents(res.data ?? [])
      } else {
        setError(res.message)
        toast.error(res.message)
      }
      setLoading(false)
    }
    fetchStudents()
  }, [])

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this student?")) return

    const res = await deleteStudentFns(id)
    console.log("Delete res - ", res)

    if (res.success) {
      toast.success(res.message)
      setStudents((prev) => prev.filter((s) => s._id !== id))
    } else {
      toast.error(res.message)
    }
  }

  return (
    <Container>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {loading && <CircularProgress />}

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Box>
          <Typography variant="h4">Students</Typography>
          <Typography>Total students: {students.length}</Typography>
        </Box>
        <Button variant="contained" component={Link} to={PATHS.studentAdd}>Add</Button>
      </Box>

      <StudentTable students={students} loading={loading} handleDelete={handleDelete} />
    </Container>
  )
}

export default Home