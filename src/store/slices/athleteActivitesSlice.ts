import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import type {athleteProfileState}  from './athleteProfileSlice'

export type athleteActiviteState =  {
  "resource_state" : number,
  "athlete" : {
    "id" : number,
    "resource_state" : number
  },
  "name" : string,
  "distance" : number,
  "moving_time" : number,
  "elapsed_time" : number,
  "total_elevation_gain" : number,
  "type" : string,
  "sport_type" : string,
  "workout_type" : any,
  "id" : number,
  "external_id" : string,
  "upload_id" : number,
  "start_date" : string,
  "start_date_local" : string,
  "timezone" : string,
  "utc_offset" : number,
  "start_latlng" : any,
  "end_latlng" : any,
  "location_city" : any,
  "location_state" : any,
  "location_country" : string,
  "achievement_count" : number,
  "kudos_count" : number,
  "comment_count" : number,
  "athlete_count" : number,
  "photo_count" : number,
  "map" : {
    "id" : string,
    "summary_polyline" : string,
    "resource_state" : number
  },
  "trainer" : boolean,
  "commute" : boolean,
  "manual" : boolean,
  "private" : boolean,
  "flagged" : boolean,
  "gear_id" : string,
  "from_accepted_tag" : boolean,
  "average_speed" : number,
  "max_speed" : number,
  "average_cadence" : number,
  "average_watts" : number,
  "weighted_average_watts" : number,
  "kilojoules" : number,
  "device_watts" : boolean,
  "has_heartrate" : boolean,
  "average_heartrate" : number,
  "max_heartrate" : number,
  "max_watts" : number,
  "pr_count" : number,
  "total_photo_count" : number,
  "has_kudoed" : boolean,
  "suffer_score" : number
}



export const getLastActivite = createAsyncThunk<athleteActiviteState[],number|undefined>(
    'activites/getLast',
    async (page = 1) => {

      const {data} = await axios
        .get(`https://www.strava.com/api/v3/athlete/activities?per_page=50&page=${page}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access_token')}`,
            }
        })

      return [data[0]]
        
    }
  )

export const getAllActivites = createAsyncThunk<athleteActiviteState[],number|undefined, {state:{athleteProfile: athleteProfileState }}>(
    'activites/getAll',
    async (page = 1, {getState}) => {
      let resp:any = []
      const {all_ride_totals, all_run_totals, all_swim_totals} = await getState().athleteProfile.stat
      const sumAllActivites = all_ride_totals.count + all_run_totals.count + all_swim_totals.count
      const steps = Math.ceil(sumAllActivites/50) + 1 
      for (let i = 1; i < steps; i++){
        const {data} = await axios
        .get(`https://www.strava.com/api/v3/athlete/activities?per_page=50&page=`+ i ,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access_token')}`,
            }
        })
        resp.push(data) 
      }
      return resp.flat()
        
    }
  )  

  export const getLastMonthActivites = createAsyncThunk<athleteActiviteState[],number|undefined, {state:{athleteProfile: athleteProfileState }}>(
    'activites/getLastMonth',
    async (page = 1, {getState}) => {
      let resp:athleteActiviteState[] = []
      const {all_ride_totals, all_run_totals, all_swim_totals, recent_ride_totals, recent_run_totals, recent_swim_totals} = await getState().athleteProfile.stat
      const sumAllActivites = all_ride_totals.count + all_run_totals.count + all_swim_totals.count
      const limit = recent_ride_totals.count + recent_run_totals.count + recent_swim_totals.count
      const steps = Math.ceil(sumAllActivites/50) + 1 
      for (let i = 1; i < steps; i++){
        const {data} = await axios
        .get(`https://www.strava.com/api/v3/athlete/activities?per_page=50&page=`+ i ,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access_token')}`,
            }
        })
        resp.push(data) 
      }
      return resp.flat().slice(0, limit)
        
    }
  ) 

  export const getLastYearActivites = createAsyncThunk<athleteActiviteState[],number|undefined, {state:{athleteProfile: athleteProfileState }}>(
    'activites/getLastYear',
    async (page = 1, {getState}) => {
      let resp:athleteActiviteState[] = []
      const {all_ride_totals, all_run_totals, all_swim_totals, ytd_ride_totals, ytd_run_totals, ytd_swim_totals} = await getState().athleteProfile.stat
      const sumAllActivites = all_ride_totals.count + all_run_totals.count + all_swim_totals.count
      const limit = ytd_ride_totals.count + ytd_run_totals.count + ytd_swim_totals.count
      const steps = Math.ceil(sumAllActivites/50) + 1 
      for (let i = 1; i < steps; i++){
        const {data} = await axios
        .get(`https://www.strava.com/api/v3/athlete/activities?per_page=50&page=`+ i ,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access_token')}`,
            }
        })
        resp.push(data) 
      }
      return resp.flat().slice(0, limit)
        
    }
  ) 

const initialState = {
    list:[] as Array<athleteActiviteState>,
  };

const athleteActivitesSlice = createSlice({
    name: "activites",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder) => {
      builder
      .addCase(getLastActivite.fulfilled, (state, action) => {
        state.list = action.payload
      })
      .addCase(getLastMonthActivites.fulfilled, (state, action) => {
        state.list = action.payload
      })
      .addCase(getLastYearActivites.fulfilled, (state, action) => {
        state.list = action.payload
      })
      .addCase(getAllActivites.fulfilled, (state, action) => {
        state.list = action.payload
      })
    },

})

export default athleteActivitesSlice.reducer


