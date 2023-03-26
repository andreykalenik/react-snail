import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect} from 'react'
import { fetchStravaToken } from "../helpers"


const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()



  useEffect(() => {
    if (!localStorage.getItem('userProfile')){

    }


    if(location.search.includes('code')){
      const authToken = location.search.split("&")[1].slice(5)
      localStorage.setItem('authToken', authToken)
    }
    if(!localStorage.getItem('authToken')) {
      navigate('/authorization')
    } else {
      (async() =>{
       const data =  await fetchStravaToken()
       await localStorage.setItem('userProfile', JSON.stringify(data))
      })()
      navigate('/')
    }
  }, [])

  return (
    <>
        <header>
            <Link to="/"> Athlete Stat </Link>
            <Link to="/map"> Map </Link>
        </header>
        <Outlet />
    </>

  )
}

export default Layout


