import axios, {AxiosError}  from 'axios'

  type CreateStravaTokenResponse  = {
    token_type: string,
    expires_at: number,
    expires_in: number,
    refresh_token: string,
    access_token: string,
    athlete:{}
  }

export const fetchStravaToken = async() => {
  
  const сlientID = '103037'
  const clientSecret = '1d640f9c7ed033730590b8551aa225151fffefe8'
  const code = localStorage.getItem('authToken')

  try{

    const { data } = await axios.post<CreateStravaTokenResponse>(`https://www.strava.com/oauth/token?client_id=${сlientID}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code`)
    return data
  } catch (error) {
    const err = error as AxiosError
    console.log(err.response?.data)
  }
}