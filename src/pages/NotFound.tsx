import { Link } from "react-router-dom"

const NotFound = () => (
  <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-slate-50">
    <h1 className="text-5xl font-bold text-slate-900">404</h1>
    <p className="text-slate-600">This page does not exist.</p>
    <Link to="/" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
      Go Home
    </Link>
  </div>
)

export default NotFound