
import { useAppDispatch, useAppSelector } from '../hook'
import { getLastActivite, getLastMonthActivites, getLastYearActivites, getAllActivites} from '../store/slices/athleteActivitesSlice'
import { UIorange } from '../assets/UIColors';
import {MapContainer,  Polyline, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import  polyline   from '@mapbox/polyline'
import Spiner from "../components/Spiner"

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



const MapPage = () =>{

    const dispatch = useAppDispatch()


        const list =  useAppSelector((state) => state.athleteActivites.list)
        const {end_latlng} = list[0]


    


    return(
        
        <>
            { list[0] === undefined ? <Spiner/> :
                <>
                    <Box sx={{
                        width: 1,
                        height: 56,
                        display:'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}>
                        <Stack spacing={3} direction="row">
                            <Button variant="outlined" onClick={() => { dispatch(getLastActivite()) }}>Last Activite</Button>
                            <Button variant="outlined" onClick={() => {dispatch(getLastMonthActivites())}}>Last 4 weeks</Button>
                            <Button variant="outlined" onClick={() => {dispatch(getLastYearActivites())}}>Last year</Button>
                            <Button variant="outlined" onClick={() => {dispatch(getAllActivites())}}>The all time</Button>
                        </Stack>
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
                            
                            <Polyline pathOptions={{color: `${UIorange}`}} positions={polyline.decode(item.map.summary_polyline)} key={item.id} > 
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