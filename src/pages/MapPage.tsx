import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hook'
import { fetcActivites} from '../store/slices/athleteActivitesSlice'
import {MapContainer,  Polyline, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import  polyline   from '@mapbox/polyline'
import Spiner from "../components/Spiner"

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const MapPage = () =>{

    const dispatch = useAppDispatch()

    useEffect(() => {
        //dispatch(fetcActivites(1))
    },[])



        const i = 4
        const listActivites =  useAppSelector((state) => state.athleteActivites.activities)
        const last =  listActivites[i]
        const {end_latlng} = last
        const {map: {summary_polyline}} = last

        
        const track  = polyline.decode(summary_polyline)


        const j = 3

        const last2 =  listActivites[j]
        const summary_polyline2 = last2.map.summary_polyline

        const track2 = polyline.decode(summary_polyline2);

    


     const limeOptions = { color: 'red' }

     const [value, setValue] = React.useState(0);

    return(
        
        <>
            { listActivites === undefined ? <Spiner/> :
                <>
                    <Box sx={{ width: 1, px: 24}}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction label="Last Activite"  />
                            <BottomNavigationAction label="Last 4 weeks "  />
                            <BottomNavigationAction label="Last year" />
                            <BottomNavigationAction label="The all time" />
                        </BottomNavigation>
                    </Box>
                    <MapContainer
                        center={end_latlng}
                        zoom={12}
                        scrollWheelZoom={true}
                        style={{ height: 'calc(100vh - (106px)' }}
                        >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Polyline pathOptions={limeOptions} positions={track} > 
                            <Tooltip direction="bottom" offset={[0, 20]} opacity={1} sticky>
                                distance: {last.distance} m <br/>
                                max speed: {last.max_speed} km/h
                            </Tooltip>
                        </Polyline>
                        <Polyline pathOptions={{ color: 'blue' }} positions={track2} > 
                            <Tooltip direction="bottom" offset={[0, 20]} opacity={1} sticky>
                                distance: {last2.distance / 1000} km <br/>
                                max speed: {last2.max_speed} km/h
                            </Tooltip>
                        </Polyline>
                    </MapContainer> 
                </>
            }
        </>

    )
}

export default MapPage