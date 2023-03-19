export const getStravaAuthorizationCode = ():string => {

    const сlientID = '103037'
    const redirectURI = 'http://localhost:3000/'
    const authEndpoint = 'https://www.strava.com/oauth/authorize'

    return `${authEndpoint}?client_id=${сlientID }&redirect_uri=${redirectURI}&response_type=code&scope=activity:read_all`

}