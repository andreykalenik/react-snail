import { configureStore } from '@reduxjs/toolkit'
import  athleteProfileSlice  from './slices/athleteProfileSlice'




const store = configureStore({
  reducer: {
    athleteProfile: athleteProfileSlice,
    // athleteStat: athleteStatSlice,
    // athleteActivites: athleteActivitesSlice,
  },
}) 

export default store