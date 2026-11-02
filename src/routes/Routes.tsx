import { createBrowserRouter, Navigate } from "react-router-dom"

import AppLayout from "../layouts/AppLayout"
import StudentWrapper from "../layouts/studentLayouts/StudentWrapper"

import ProductForm from "../pages/ProductForm"
import StopWatch from "../pages/StopWatch"
import NotFound from "../pages/NotFound"

import Home from "../pages/StudentCrud/Home"
import AddStudent from "../pages/StudentCrud/AddStudent"
import EditStudent from "../pages/StudentCrud/EditStudent"
import StudentDetails from "../pages/StudentCrud/StudentDetails"

const router = createBrowserRouter([
  {
    // Main layout: header (Products | Stopwatch | Students) + the page below it
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/products" replace /> },

      // Project A
      { path: "products", element: <ProductForm /> },

      // Project B
      { path: "stopwatch", element: <StopWatch /> },

      // Project C (has its own small sub-menu: All Students / Add Student)
      {
        path: "students",
        element: <StudentWrapper />,
        children: [
          { index: true, element: <Home /> },
          { path: "add", element: <AddStudent /> },
          { path: "edit/:id", element: <EditStudent /> },
          { path: ":id", element: <StudentDetails /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
])

export default router
