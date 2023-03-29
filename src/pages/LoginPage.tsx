import {getStravaAuthorizationCode} from '../helpers/'

const LoginPage = () =>{
    const connectToApp = () => {
        
        setTimeout(
            window.location.href = getStravaAuthorizationCode(),
            20000
        )
      }
    return(
        <>
            <h1>Login page</h1>
            <button onClick={connectToApp}>Start</button>
        </>

    )
}

export default LoginPage