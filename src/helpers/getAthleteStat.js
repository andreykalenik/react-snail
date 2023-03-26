import axios from 'axios'
const userProfile =  JSON.parse(localStorage.getItem('userProfile'));
const {access_token, athlete: {id}} = userProfile

const getStat = () => {

    axios.get(`https://www.strava.com/api/v3/athletes/${id}/stats?access_token=${access_token}`)
    .then((response) =>console.log(response.data))


}

//export default getStat