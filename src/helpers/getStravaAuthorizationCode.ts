import { STRAVA_CLIENT_ID, REDIRECT_URI, STRAVA_OAUTH_URL } from '../constants';

export const getStravaAuthorizationCode = ():string => {

    return `${STRAVA_OAUTH_URL}?client_id=${STRAVA_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=activity:read_all`

}