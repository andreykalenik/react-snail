import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect} from 'react'
import { useSelector } from "react-redux"
import { fetchStravaToken } from "../helpers"
import  checkToken  from '../helpers/checkToken'
import styled from 'styled-components';
import  ResponsiveAppBar  from '../components/AppMenu'


const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {profile_medium, firstname} = useSelector((state) => state.athleteProfile.profile)

  useEffect(() => {
    if(localStorage.getItem('access_token')){
      checkToken()
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
  
  }, [])

  return (
    <>
        <ResponsiveAppBar
          avatarImg = {profile_medium}
          avatarAlt = {firstname}>
            <StyledLink to="/"> Athlete Stat </StyledLink>
            <StyledLink to="/map"> Map </StyledLink>
        </ResponsiveAppBar>
        <Outlet />
    </>

  )

}

const StyledLink = styled(Link)`
    font-size: 24px;
    color: white;
    text-decoration: none;
`;

export default Layout


