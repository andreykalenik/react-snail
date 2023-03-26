import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect} from 'react'
import { fetchStravaToken } from "../helpers"
import { useDispatch } from "react-redux"
import  fetchAthleteProfile  from '../helpers/fetchAthleteProfile'
import {fetchProfile} from '../store/slices/athleteProfileSlice'


const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()



  useEffect(() => {
    if(localStorage.getItem('access_token')){
      fetchAthleteProfile()
      navigate('/')
    } else {
      navigate('/authorization')
    }

    if(location.search.includes('code')){
      (async() =>{
        const authToken = await location.search.split("&")[1].slice(5)
        await localStorage.setItem('authToken', authToken) 
        const {access_token} =  await fetchStravaToken()
        await( localStorage.setItem('access_token', access_token))
        navigate('/')
      })()
    }
    dispatch(fetchProfile())
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


