import {getStravaToken} from '../helpers'
const LastActivity = () =>{

const deleteCode:any = localStorage.removeItem('authToken')


    return(
        <>
            <h1>Last Activity</h1>
            <button onClick={getStravaToken}> get token </button>
            <button onClick={deleteCode}> delete </button>
        </>

    )
}

export default LastActivity