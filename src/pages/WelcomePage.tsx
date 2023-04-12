import PageTemplate from "../components/PageTemplate";
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '../hook'
import { fetchProfile, fetchStat } from '../store/slices/athleteProfileSlice'
import { getLastActivite} from '../store/slices/athleteActivitesSlice'
import styled from "styled-components";
import Spiner from "../components/Spiner";

const WelcomePage:React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfile())
        dispatch(getLastActivite())
        dispatch(fetchStat())
    },[dispatch])

    const {profile_medium, firstname, lastname, country, state} = useAppSelector((state) => state.athleteProfile.profile)

    return ( 
        <>
            { lastname === undefined ? <Spiner/> :
                <PageTemplate>
                    <h2>Wellcome to React Snail App.</h2>
                    <p>This app shows the records of the greatest athlete of all time.</p>
                    <p>Athlete info</p>
                    <IMG
                        src = {profile_medium}
                        width = "256px"
                        height= "256px"
                        alt = {`${firstname} ${lastname}`}
                    />
                    <p>{firstname} {lastname}</p>
                    <p>{country} {state}</p>
                </PageTemplate>
            }
        </>

     )
}

const IMG = styled.img`
border-radius:50%;
`

export default WelcomePage;
