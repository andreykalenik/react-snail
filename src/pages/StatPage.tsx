import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '../hook'
import { fetchStat } from '../store/slices/athleteProfileSlice'
import { fetcActivites } from '../store/slices/athleteActivitesSlice'
import StatTable from '../components/StatTable'
import styled from 'styled-components';
import Spiner from "../components/Spiner"

const StatPage = () =>{

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchStat())
        dispatch(fetcActivites(1))
    },[dispatch])

    const {recent_ride_totals, all_ride_totals, ytd_ride_totals,
         recent_run_totals, all_run_totals, ytd_run_totals,
         recent_swim_totals, all_swim_totals, ytd_swim_totals
         } =  useAppSelector((state) => state.athleteProfile.stat)

    const rows = [
        {
            title: "Last 4 weeks ride stats",
            body: recent_ride_totals
        },
        {
            title: "The year to date ride stats",
            body: ytd_ride_totals
        },
        {
            title: "The all time ride stats",
            body: all_ride_totals
        },        {
            title: "Last 4 weeks run stats",
            body: recent_run_totals
        },
        {
            title: "The year to date run stats",
            body: ytd_run_totals
        },
        {
            title: "The all time run stats",
            body: all_run_totals
        },        {
            title: "Last 4 weeks swim stats",
            body: recent_swim_totals
        },
        {
            title: "The year to date swim stats",
            body: ytd_swim_totals
        },
        {
            title: "The all time swim stats",
            body: all_swim_totals
        },


    ]     
    
return(
    <>
        { recent_ride_totals === undefined  ? <Spiner/> : 
            <StatTableWrapper>
                <StatTable rows={rows} />
            </StatTableWrapper>
            
        }
    </>
    )
}

const StatTableWrapper = styled.div`
    display: flex;
    max-width: 1536px;
    padding: 24px;
    margin: auto;
`


export default StatPage