//import getStat from "../helpers/getAthleteStat"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {fetchProfile} from '../store/slices/athleteProfileSlice'


const StatPage = () =>{
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchProfile())
    // },[])
return(
    <>
        <h1>StatPage</h1>
        {/* <button onClick={getStat}>get stat</button> */}
    </>

)
}

export default StatPage