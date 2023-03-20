import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { fetchUserProfile } from '../store/slices/userProfileSlice'



const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if(location.search.includes('code')){
      const authToken = location.search.split("&")[1].slice(5)
      localStorage.setItem('authToken', authToken)
    }
    if(!localStorage.getItem('authToken')) {
      navigate('/authorization')
    } else {
      navigate('/')
      //dispatch(fetchUserProfile())
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


