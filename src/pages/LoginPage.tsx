import {getStravaAuthorizationCode} from '../helpers/'

const LoginPage = () =>{
    const connectToApp = () => {
        window.location.href = getStravaAuthorizationCode()
      }
    return(
        <>
            <h1>Login page</h1>
            <button onClick={connectToApp}>Start</button>
        </>

    )
}

export default LoginPage