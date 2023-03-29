import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetcActivites = createAsyncThunk(
    'activites/fetch',
    async (page = '1', per_page = '50' ) => {

      const {data} = await axios
        .get(`https://www.strava.com/api/v3/athlete/activities?per_page=50&page=${page}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('access_token')}`,
            }
        })
      //console.log(data)
      return data
        
    }
  )


const athleteActivitesSlice = createSlice({
    name: "activites",
    initialState: {
        activities: [],
    },
    reducers:{},
    extraReducers:{
        [fetcActivites.fulfilled]: (state, action) => {
            state.activities = action.payload
          }
    },

})

export default athleteActivitesSlice.reducer