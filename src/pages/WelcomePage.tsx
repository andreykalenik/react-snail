import PageTemplate from "../components/PageTemplate";
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from '../hook'
import { fetchProfile } from '../store/slices/athleteProfileSlice'
import styled from "styled-components";

const WelcomePage:React.FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfile())
    },[dispatch])

    const userProfile = useAppSelector((state) => state.athleteProfile.profile)

    return ( 
        <PageTemplate>
            <h2>Wellcome to React Snail App.</h2>
            <p>This app shows the records of the greatest athlete of all time.</p>
            <p>Athlete info</p>
            <IMG
                src = {userProfile.profile_medium}
                width = "256px"
                height= "256px"
                alt = {`${userProfile.firstname} ${userProfile.lastname}`}
            />
            <p>{`${userProfile.firstname} ${userProfile.lastname}`}</p>
            <p>{userProfile.country} {userProfile.state}</p>
        </PageTemplate>

     );
}

const IMG = styled.img`
border-radius:50%;
`

export default WelcomePage;
