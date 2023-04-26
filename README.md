# React Snail App

React Snail App is study prodject. The App visualising your Strava activities on the OSM map.

Based on React, Redux Toolkit, Leaflet Map, @mapbox/polyline and Strava API.

## Info

This is app that does the following:

- Initiates Strava's OAuth workflow
- Request and store an access token from Strava via web server
- Use access token to request activities from Strava
- Draw tracks Strava activities on the OSM map
- Filters tracks by time for drawing



## Setup

Clone https://github.com/andreykalenik/react-snail/ and follow directions to setup and start app.

Create .env.local file in root directory and add the following variables. More information about [STAVA API](https://developers.strava.com/docs/getting-started/).
```
CLIENT_ID = 'YOUR_STRAVA_APP_CLIENT_ID'
CLIENT_SECRET = 'YOUR_STRAVA_APP_CLIENT_SECRET'
REDIRECT_URI = 'http://localhost:3000/'
or
REDIRECT_URI = 'YOUR_REDIRECT_URI_:port'
```

Start react app

```
npm start
```

## **Warning !!!**

**Users from Russia and Belarus must use VPN to access Strava.**
