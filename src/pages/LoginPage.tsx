import {generateStravaURL} from '../helpers/generateStravaURL'
const LoginPage = () =>{
    const connectToApp = () => {
        window.location.href = generateStravaURL()
      }
    return(
        <>
            <h1>Login page</h1>
            <button onClick={connectToApp}>Start</button>
        </>

    )
}

export default LoginPage