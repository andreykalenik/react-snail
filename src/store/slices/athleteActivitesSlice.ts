import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'




export const fetcActivites = createAsyncThunk<
  athleteActiviteType[],
  number
  >(
    'activites/fetch',
    async (page = 1) => {

      const {data} = await axios
        .get(`https://www.strava.com/api/v3/athlete/activities?per_page=50&page=${page}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access_token')}`,
            }
        })

      return data
        
    }
  )

const initialState = {
    activities: [] as Array<athleteActiviteType>,
  };

const athleteActivitesSlice = createSlice({
    name: "activites",
    initialState: initialState,
    reducers:{},
    extraReducers:(builder) => {
      builder.addCase(fetcActivites.fulfilled, (state, action) => {
        state.activities = action.payload
      })

    },

})

export default athleteActivitesSlice.reducer

type athleteActiviteType =  {
  "resource_state" : number,
  "athlete" : {
    "id" : number,
    "resource_state" : number
  },
  "name" : "Happy Friday",
  "distance" : number,
  "moving_time" : number,
  "elapsed_time" : number,
  "total_elevation_gain" : number,
  "type" : string,
  "sport_type" : string,
  "workout_type" : any,
  "id" : 154504250376823,
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
    "summary_polyline" : null|string,
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

