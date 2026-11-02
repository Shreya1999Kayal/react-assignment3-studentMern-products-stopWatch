import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: { main: "#040935" }, // same color your header uses now
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none" }, // no ALL CAPS on buttons
      },
    },
  },
})

export default theme

