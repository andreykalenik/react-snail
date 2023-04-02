import {getStravaAuthorizationCode} from '../helpers/'
import styled from 'styled-components';
import AppLogo from '../assets/img/snail-static.svg'
import {UIorange, UIorangeHover, UIstravaBG, UIstravaBorder} from '../assets/UIColors'


const LoginPage = () =>{
    const connectToApp = () => {
        
        setTimeout(
            window.location.href = getStravaAuthorizationCode(),
            20000
        )
      }
    return(
        <Body>
            <Header>
                <img 
                    src = {AppLogo}
                    width = "40px"
                    height= "40px"
                    alt = "React Logo"
                />
                <h1>React Snail App</h1>
            </Header>
            <main>
                <Container>
                    <h2>Visualising your Strava activities on the OSM map</h2>
                    <p>React Snail App based on React, Leaflet Map, @mapbox/polyline and Strava API</p>
                    <Button onClick={connectToApp}>Let's do!</Button>
                </Container>
            </main>
            
        </Body>

    )
}

const Body = styled.body`
        background-color: ${UIstravaBG};
`


const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 50px;
    padding-left: 16px;
    border-bottom: 1px solid ${UIstravaBorder};
    h1{
        font-size: 24px;
        color: ${UIorange};        
    }
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background-color: white;
    max-width: 540px;
    padding: 40px 20px;
    margin: 0 auto;
    text-align: center;
    h2{
        font-size: 22px;
        font-weight: 400;
        line-height: 28px;
    }
    @media (min-width: 992px) {
            padding-left: 106px;
            padding-right: 106px;
         }
`
const Button = styled.button`
    background-color: ${UIorange};
    border-color: ${UIorange};
    border: 1px solid transparent;
    color: white;
    -webkit-box-align: center;
    border-radius: 4px;
    cursor: pointer;
    justify-content: center;
    line-height: normal;
    padding: 10px 30px;
    width: 100%;
    transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease;
    &:hover{
        background-color: ${UIorangeHover};
        border-color: ${UIorangeHover};
    }
`

export default LoginPage