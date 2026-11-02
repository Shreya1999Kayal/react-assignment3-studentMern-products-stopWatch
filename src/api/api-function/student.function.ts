import type { StudentPayload } from "../../types/interfaces/studentCrud/student.interface"
import { Endpoint } from "../../services/helper/studentEndpoint.helper"
import axios from "axios"
import api from "../api"


const networkError = { success: false, message: "Network error. Please try again." }

// if the server answered with an error, return its body, else return networkError
const errorData = (error: unknown) =>
  axios.isAxiosError(error) && error.response ? error.response.data : networkError

// the backend uses multer, so create and update are sent as FormData
const buildFormData = (payload: StudentPayload) => {
  const formdata = new FormData()
  formdata.append("name", payload.name)
  formdata.append("email", payload.email)
  formdata.append("age", String(payload.age))
  formdata.append("course", payload.course)
  if (payload.image) formdata.append("image", payload.image)
  return formdata
}

// GET - all students
export const getStudentsFns = async () => {
  try {
    const res = await api.get(Endpoint.students.getAllStudents)
    return res.data
  } catch (error) {
    return errorData(error)
  }
}

// GET - one student (used by View and Edit pages)
export const getStudentByIdFns = async (id: string) => {
  try {
    const res = await api.get(`${Endpoint.students.getOneStudent}/${id}`)
    return res.data
  } catch (error) {
    return errorData(error)
  }
}

// POST - add student
export const createStudentFns = async (payload: StudentPayload) => {
  try {
    const res = await api.post(Endpoint.students.createStudent, buildFormData(payload), {
      headers: { "Content-Type": "multipart/form-data" },
    })
    return res.data
  } catch (error) {
    return errorData(error)
  }
}

// PUT - update student
export const updateStudentFns = async (id: string, payload: StudentPayload) => {
  try {
    const res = await api.put(`${Endpoint.students.updateStudent}/${id}`, buildFormData(payload), {
      headers: { "Content-Type": "multipart/form-data" },
    })
    return res.data
  } catch (error) {
    return errorData(error)
  }
}

// DELETE - remove student
export const deleteStudentFns = async (id: string) => {
  try {
    const res = await api.delete(`${Endpoint.students.deleteStudent}/${id}`)
    return res.data
  } catch (error) {
    return errorData(error)
  }
}