import axios, { AxiosPromise } from 'axios'
export const getStravaToken = ():void => {

    const сlientID = '103037'
    const clientSecret = '1d640f9c7ed033730590b8551aa225151fffefe8'
    const code = localStorage.getItem('authToken')


    axios.post(`https://www.strava.com/oauth/token?client_id=${сlientID}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`)
    .then((response) => {
        console.log(response.data);
      }, (error) => {
        console.log(error);
      });
}