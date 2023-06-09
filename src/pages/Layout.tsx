import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect} from 'react'
import {  useAppSelector } from '../hook'
import { fetchStravaToken } from "../helpers"
import  checkToken  from '../helpers/checkToken'
import styled from 'styled-components';
import  ResponsiveAppBar  from '../components/AppMenu'


const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {profile_medium, firstname} = useAppSelector((state) => state.athleteProfile.profile)

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
    <main>
        <ResponsiveAppBar
          avatarImg = {profile_medium}
          avatarAlt = {firstname}>
            <StyledLink to="/map"> Map </StyledLink>
            <StyledLink to="/stat"> Athlete Stat </StyledLink>

        </ResponsiveAppBar>
        <Outlet />
    </main>

  )

}

const StyledLink = styled(Link)`
    font-size: 24px;
    color: white;
    text-decoration: none;
`;

export default Layout


