import { configureStore } from '@reduxjs/toolkit'
//import  athleteSlice  from './slices/athleteSlice'

let userProfile, athleteStat, athleteActivites = 100
let userProfileSlice, athleteStatSlice, athleteActivitesSlice = 100

const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    athleteStat: athleteStatSlice,
    athleteActivites: athleteActivitesSlice,
  },
}) 

export default store