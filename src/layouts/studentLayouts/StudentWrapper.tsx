import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Navbar from "../../components/StudentMern/Navbar"

const StudentWrapper = () => (
  <div className="flex flex-1 flex-col">
    <Navbar />
    <Box sx={{ flex: 1, p: 3 }}>
      <Outlet />
    </Box>
  </div>
)

export default StudentWrapper
