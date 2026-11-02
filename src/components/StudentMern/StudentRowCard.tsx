import type { StudentRowCardProps } from "../../types/type/student.type"
import { getImageUrl } from "../../services/helper/image"
import { PATHS } from "../../routes/paths"
import { Avatar, Box, Button } from "@mui/material"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import { Link } from "react-router-dom"


const StudentRowCard = ({ row, handleDelete }: StudentRowCardProps) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        <Avatar src={getImageUrl(row.image)} alt={row.name} variant="rounded">
          {row.name.charAt(0).toUpperCase()}
        </Avatar>
      </TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell>{row.age}</TableCell>
      <TableCell>{row.course}</TableCell>
      <TableCell>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button size="small" component={Link} to={PATHS.studentView(row._id)}>View</Button>
          <Button size="small" component={Link} to={PATHS.studentEdit(row._id)}>Edit</Button>
          <Button size="small" color="error" onClick={() => handleDelete(row._id)}>Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default StudentRowCard