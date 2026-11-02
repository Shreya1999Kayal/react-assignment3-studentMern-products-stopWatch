// ALL api paths live here. Full url = VITE_SERVER_URL + path
export const Endpoint = {
  students: {
    getAllStudents: "/student/get",
    getOneStudent: "/student/get",    // + /:id
    createStudent: "/student/create",
    updateStudent: "/student/update", // + /:id
    deleteStudent: "/student/delete", // + /:id
  },
}
