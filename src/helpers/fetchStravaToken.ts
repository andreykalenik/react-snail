import { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } from '../constants';
import axios  from 'axios'

  type CreateStravaTokenResponse  = {
    token_type: string,
    expires_at: number,
    expires_in: number,
    refresh_token: string,
    access_token: string,
    athlete:{}
  }

export const fetchStravaToken = async() => {
  
  const sesion_authToken = localStorage.getItem('authToken')

      const { data } = await axios.post<CreateStravaTokenResponse>(`https://www.strava.com/oauth/token?client_id=${STRAVA_CLIENT_ID}&client_secret=${STRAVA_CLIENT_SECRET}&code=${sesion_authToken}&grant_type=authorization_code`)
      return data


}