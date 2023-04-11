import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hook'
import { getLastActivite} from '../store/slices/athleteActivitesSlice'
import { UIorange } from '../assets/UIColors';
import {MapContainer,  Polyline, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import  polyline   from '@mapbox/polyline'
import Spiner from "../components/Spiner"

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';



const MapPage = () =>{

    const dispatch = useAppDispatch()

    useEffect(() => {

         dispatch(getLastActivite())
    },[dispatch])

        const list =  useAppSelector((state) => state.athleteActivites.list)
        const {end_latlng} = list[0]

    


     const [value, setValue] = React.useState(0);

    return(
        
        <>
            { list[0] === undefined ? <Spiner/> :
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
                        {list.map((item) =>(
                            
                            <Polyline pathOptions={{color: `${UIorange}`}} positions={polyline.decode(item.map.summary_polyline)} > 
                                <Tooltip direction="bottom" offset={[0, 20]} opacity={1} sticky>
                                    <p>{item.name}</p> 
                                    distance: {(item.distance/1000).toFixed(1)} km <br/>
                                    time: {(item.moving_time/60).toFixed(1)} min <br/>
                                    max speed: {item.max_speed.toFixed(1)} km/h
                                </Tooltip>
                            </Polyline>
                        ))
                        }

                        

                    </MapContainer> 
                </>
            }
        </>

    )
}

export default MapPage