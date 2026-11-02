// what the API RETURNS
export interface StudentItem {
  _id: string
  name: string
  email: string
  age: number
  course: string
  image?: { url: string; public_id: string }
  createdAt?: string
  updatedAt?: string
}

// what we SEND to the API (image is optional)
export interface StudentPayload {
  name: string
  email: string
  age: number
  course: string
  image?: File | null
}