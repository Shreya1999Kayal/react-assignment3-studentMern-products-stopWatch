import { Box, Button, Paper } from "@mui/material"
import { NavLink } from "react-router-dom"
import { PATHS } from "../../routes/paths"

// Small sub-menu shown only inside the Students section
const Navbar = () => (
  <Paper square elevation={1}>
    <Box sx={{ display: "flex", gap: 1, px: 3, py: 1 }}>
      <Button component={NavLink} to={PATHS.students} end sx={{ "&.active": { fontWeight: 700, bgcolor: "action.selected" } }}>
        All Students
      </Button>
      <Button component={NavLink} to={PATHS.studentAdd} sx={{ "&.active": { fontWeight: 700, bgcolor: "action.selected" } }}>
        Add Student
      </Button>
    </Box>
  </Paper>
)

export default Navbar
