import { useSelector } from "react-redux"
import {MapContainer,  Polyline, TileLayer, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import  polyline   from '@mapbox/polyline'

const MapPage = () =>{




        const i = 4
        const listActivites =  useSelector((state) => state.athleteActivites.activities)
        const last =  listActivites[i]
        const {end_latlng} = last
        const {map: {summary_polyline}} = last

        const track = polyline.decode(summary_polyline);


        const j = 3

        const last2 =  listActivites[j]
        const summary_polyline2 = last2.map.summary_polyline

        const track2 = polyline.decode(summary_polyline2);

    


     const limeOptions = { color: 'red' }


    return(
        
        <>
            <h1>MapPage</h1>
            <MapContainer
                center={end_latlng}
                 zoom={12}
                 scrollWheelZoom={false}
                 style={{ height: "90vh" }}
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
                        distance: {last2.distance} m <br/>
                        max speed: {last2.max_speed} km/h
                    </Tooltip>
                </Polyline>
            </MapContainer> 
            {
                listActivites.map((item) => <p key={item.id}> {item.type} distance {item.distance} m </p>)
            }
        </>

    )
}

export default MapPage