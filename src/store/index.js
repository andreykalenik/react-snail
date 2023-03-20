import { configureStore } from '@reduxjs/toolkit'
import  userProfileSlice  from './slices/userProfileSlice'


const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    //athleteActivities: athleteActivitiesSlice,
    //athleteStats: athleteStatsSlice
  },
}) 

export default store