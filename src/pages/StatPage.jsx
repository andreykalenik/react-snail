//import getStat from "../helpers/getAthleteStat"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {fetchStat, fetchProfile} from '../store/slices/athleteProfileSlice'



const StatPage = () =>{

    // const dispatch = useDispatch()
    // useEffect(() => {

    //     dispatch(fetchStat())
    // },[dispatch])
    
return(
    <>
        <h1>StatPage</h1>
        {/* <button onClick={getStat}>get stat</button> */}
    </>

)
}

export default StatPage