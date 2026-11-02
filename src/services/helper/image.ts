import type { StudentItem } from "../../types/interfaces/studentCrud/student.interface"

// image can be missing or have an empty url -> return "" so Avatar shows a letter
export const getImageUrl = (img: StudentItem["image"]): string => img?.url ?? ""
