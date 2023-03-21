import {getStravaToken} from '../helpers'
import axios from 'axios'
const LastActivity = () =>{

const deleteCode:any = () =>
{
    localStorage.removeItem('authToken')
    localStorage.removeItem('userProfile')
} 

const getStat = () => {
 const id = '91212713'
 const your_access_token = "e70195bb3ef2abbe7fb85faa41f1b044bec349e6"
 
 axios.get(`https://www.strava.com/api/v3/athletes/${id}/stats?access_token=${your_access_token}`)
 .then((response) =>console.log(response.data))
}

const getActivitys = () => {
    const id = '91212713'
    const your_access_token = "e70195bb3ef2abbe7fb85faa41f1b044bec349e6"
    
    axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${your_access_token}`)
    .then((response) =>console.log(response.data))
   }

    return(
        <>
            <h1>Last Activity</h1>
            <button onClick={getStravaToken}> get token </button>
            <button onClick={deleteCode}> delete </button>
            <button onClick={getStat}>get stat</button>
            <button onClick={getActivitys}>get activity list</button>
        </>

    )
}

export default LastActivity