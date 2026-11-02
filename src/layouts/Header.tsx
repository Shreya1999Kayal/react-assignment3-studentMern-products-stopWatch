import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { PATHS } from "../routes/paths"

const links = [
  { label: "Products", to: PATHS.products },
  { label: "Stopwatch", to: PATHS.stopwatch },
  { label: "Students", to: PATHS.students },
]

// NavLink gives us "isActive", so the current page's button is highlighted
const Header = () => (
  <AppBar position="sticky" color="primary">
    <Toolbar sx={{ gap: 1, flexWrap: "wrap" }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        React Assignment 3
      </Typography>

      {links.map((l) => (
        <Button
          key={l.to}
          color="inherit"
          component={NavLink}
          to={l.to}
          sx={{ "&.active": { bgcolor: "rgba(255,255,255,0.18)" } }}
        >
          {l.label}
        </Button>
      ))}
    </Toolbar>
  </AppBar>
)

export default Header
