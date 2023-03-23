import {getStravaToken} from '../helpers'
import axios from 'axios'
const LastActivity = () =>{

    const userProfile =  JSON.parse(localStorage.getItem('userProfile'));
    const {access_token, athlete: {id}} = userProfile

const deleteCode:any = () =>
{
    localStorage.removeItem('authToken')
    localStorage.removeItem('userProfile')
} 

const getStat = () => {

    axios.get(`https://www.strava.com/api/v3/athletes/${id}/stats?access_token=${access_token}`)
 .then((response) =>console.log(response.data))
}

const getActivitys = () => {

    axios.get(`https://www.strava.com/api/v3/athlete/activities?access_token=${access_token}`)
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