import axios from "axios"

// ONE axios instance for the whole app (same idea as sir's api.ts)
const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
})

// Request interceptor - runs before every request
// (no token needed for this project, so we just pass the config through)
api.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// Response interceptor - runs after every response
api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.log("axios intercept - ", error.response)
    return Promise.reject(error)
  }
)

export default api