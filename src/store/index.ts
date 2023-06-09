import { configureStore } from '@reduxjs/toolkit'
import  athleteProfileSlice  from './slices/athleteProfileSlice'
import  athleteActivitesSlice  from './slices/athleteActivitesSlice'



const store = configureStore({
  reducer: {
    athleteProfile: athleteProfileSlice,
    athleteActivites: athleteActivitesSlice,
  },
}) 

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
