import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect} from 'react'
import { fetchStravaToken } from "../helpers"
import  checkToken  from '../helpers/checkToken'
import styled from 'styled-components';
import {UIorange} from '../assets/UIColors'

const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()

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
        <Header>
            <StyledLink to="/"> Athlete Stat </StyledLink>
            <StyledLink to="/map"> Map </StyledLink>
        </Header>
        <Outlet />
    </>

  )

}

const Header = styled.header`
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 24px;
    padding-inline-start: 16px;
    background-color:${UIorange};
    color: white;
`
const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

export default Layout


