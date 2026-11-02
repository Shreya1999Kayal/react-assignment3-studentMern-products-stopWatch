// ALL route paths live here, so a path is changed in ONE place only.
export const PATHS = {
  products: "/products",
  stopwatch: "/stopwatch",
  students: "/students",
  studentAdd: "/students/add",
  studentEdit: (id: string) => `/students/edit/${id}`,
  studentView: (id: string) => `/students/${id}`,
}
