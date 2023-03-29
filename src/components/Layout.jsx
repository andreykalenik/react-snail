import { Link, Outlet, useNavigate, useLocation } from "react-router-dom"
import { useEffect} from 'react'
import { fetchStravaToken } from "../helpers"
import  checkToken  from '../helpers/checkToken'
import styled from 'styled-components';

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
//$color = #FC4C02
min-height: 3.5rem;
font-size: 2rem;
background-color:#FC4C02;
color: #ffffff;
/* &hover{
  background-color: color.blackness(#FC4C02)
} */
`
const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 1rem;
  padding: 1rem;
`;

export default Layout


