import {getStravaAuthorizationCode} from '../helpers/'
import styled from 'styled-components';
import AppLogo from '../assets/img/app-logo.png'


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
            
            <button onClick={connectToApp}>Start</button>
        </Body>

    )
}

const Body = styled.body`
        background-color: #f7f7fa;
`

const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 16px;

    height: 50px;
    padding-left: 16px;
    border-bottom: 1px solid #f0f0f5;
    h1{
        font-size: 24px;
        color: #fc5200;        
    }
`

export default LoginPage