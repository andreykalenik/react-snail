import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchStat } from '../store/slices/athleteProfileSlice'
import { fetcActivites } from '../store/slices/athleteActivitesSlice'



const StatPage = () =>{

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchStat())
        dispatch(fetcActivites())
    },[])
    
return(
    <>
        <h1>StatPage</h1>
        {/* <button onClick={getStat}>get stat</button> */}
    </>

)
}

export default StatPage