import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect} from 'react'


const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()


  useEffect(() => {
    if(location.search.includes('code')){
      const authToken = location.search.split("&")[1].slice(5)
      localStorage.setItem('authToken', authToken)
    }
    if(!localStorage.getItem('authToken')) {
      navigate('/authorization')
    } else {
      navigate('/')
    }
  }, [])

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


