import { Outlet } from "react-router-dom"
import Header from "./Header"

// Header stays on top for every page. <Outlet /> = the page chosen by the route.
// "flex-1" lets each page fill the remaining screen height under the header.
const AppLayout = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex flex-1 flex-col">
      <Outlet />
    </main>
  </div>
)

export default AppLayout
