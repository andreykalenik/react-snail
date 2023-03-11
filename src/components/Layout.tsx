import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <header>
            <Link to="/"> Last Activity</Link>
            <Link to="/week"> Last Week </Link>
            <Link to="/month"> Last Month </Link>
            <Link to="/range"> Define Range </Link>
        </header>
        <Outlet />
    </>

  )
}

export default Layout
