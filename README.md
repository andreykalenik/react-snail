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

Create .env.local file in root directory and add the following variables. In this example, the URIs are the endpoints are from the flask app.
```
REACT_APP_AUTH_URI = 'http://localhost:3000/strava_authorize'
REACT_APP_TOKEN_URI = 'http://localhost:3000/strava_token'

REACT_APP_GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'
or
REACT_APP_MAP_BOX_ACCESS_TOKEN = 'YOUR_MAP_BOX_ACCESS_TOKEN'
```

Start react app

```
npm start
```

## **Warning !!!**

**Users from Russia and Belarus must use VPN to access Strava.**
