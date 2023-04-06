import {getStravaAuthorizationCode} from '../helpers/'
import Button from "../components/Button";
import PageTemplate from "../components/PageTemplate";


const LoginPage = () =>{
    
    const connectToApp = () => {
        
        setTimeout(
            window.location.href = getStravaAuthorizationCode(),
            20000
        )
      }

    return(
        <PageTemplate>
            <h2>Visualising your Strava activities on the OSM map</h2>
            <p>React Snail App based on React, Leaflet Map, @mapbox/polyline and Strava API</p>
            <Button onClick={connectToApp}>Let's go!</Button>
        </PageTemplate>
    )
}

export default LoginPage