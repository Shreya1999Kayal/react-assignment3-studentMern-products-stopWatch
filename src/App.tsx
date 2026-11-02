import React from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"

import "./App.css"
import router from "./routes/Routes"
import theme from "./theme/theme"

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <Toaster position="top-right" closeButton richColors />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
