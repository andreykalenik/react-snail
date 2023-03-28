import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProfile = createAsyncThunk(
  'athlete/fetchProfile',
  async function(){

    const data = await axios
      .get(`https://www.strava.com/api/v3/athlete`,{
          headers:{
              Authorization:`Bearer ${localStorage.getItem('access_token')}`,
          }
      })

      return data
      
  }
)

export const fetchStat = createAsyncThunk(
  'athlete/fetchStat',
  async function(_, {getState}){
    const { id } =  getState()
    console.log ('id ---' + id)
    // const data = await axios
    //   .get(`https://www.strava.com/api/v3/athletes/${id}/stats`,{
    //       headers:{
    //           Authorization:`Bearer ${localStorage.getItem('access_token')}`,
    //       }
    //   })

    //   return data
      
  }
)


const athleteProfileSlice = createSlice({
  name: "athlete",
  initialState: {
    profile: {},
    status: null,
    error: null,
    stat: null,
  },
  reducers: {},
  extraReducers:{
    [fetchProfile.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchProfile.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.profile = action.payload.data
    },
    // [fetchProfile.rejected]: (state, action) =>{
    //   state.status = 'rejected'
    //   state.error = action.payload.response.status
    // },
    [fetchStat.fulfilled]: (state, action) => {
      state.stat = action.payload
    }
  }
})


export default athleteProfileSlice.reducer