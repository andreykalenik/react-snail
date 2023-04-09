import type { RootState } from '../index'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchProfile = createAsyncThunk<userProfileType>(
  'athlete/fetchProfile',
  async() => {

    const {data} = await axios
      .get(`https://www.strava.com/api/v3/athlete`,{
          headers:{
              Authorization:`Bearer ${localStorage.getItem('access_token')}`,
          }
      })

      return data
      
  }
)

export const fetchStat = createAsyncThunk<userStatType, void, {state: RootState }>(
  'athlete/fetchStat',
  async (_, { getState , dispatch }) => {
    await dispatch(fetchProfile())
    const id  = await getState().athleteProfile.profile.id
    const {data} = await axios
      .get(`https://www.strava.com/api/v3/athletes/${id}/stats`,{
          headers:{
              Authorization:`Bearer ${localStorage.getItem('access_token')}`,
          }
      })

    return data
      
  }
)

const initialState = {
  profile: <userProfileType>{},
  stat: <userStatType>{}
};

const athleteProfileSlice = createSlice({
  name: "athlete",
  initialState: initialState,
  reducers: {},
  extraReducers:(builder) =>{
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload
    }),
    builder.addCase(fetchStat.fulfilled, (state, action) => {
      state.stat = action.payload
    })
  }
})


export default athleteProfileSlice.reducer

type userProfileType = {
  "id": number,
  "username": string,
  "resource_state": string,
  "firstname": string,
  "lastname": string,
  "bio": null | string,
  "city": null | string,
  "state": null | string,
  "country": null | string,
  "sex": string,
  "premium": boolean,
  "summit": boolean,
  "created_at": string,
  "updated_at": string,
  "badge_type_id": number,
  "weight": number,
  "profile_medium": null | string,
  "profile": null | string,
  "friend": null | number,
  "follower": null | number
}

type userStatType = {
    biggest_ride_distance: null | number,
    biggest_climb_elevation_gain: null |number,
    recent_ride_totals: ActivitesStat,
    all_ride_totals: ActivitesStat,
    recent_run_totals: ActivitesStat,
    all_run_totals : ActivitesStat,
    recent_swim_totals: ActivitesStat,
    all_swim_totals: ActivitesStat,
    ytd_ride_totals: ActivitesStat,
    ytd_run_totals: ActivitesStat,
    ytd_swim_totals: ActivitesStat,
  }

 type ActivitesStat = {
    count: number,
    distance: number,
    moving_time: number,
    elapsed_time: number,
    elevation_gain: number,
    achievement_count?: number
 } 

