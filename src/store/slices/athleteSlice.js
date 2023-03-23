import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


const userProfileSlice = createSlice({
  name: "athlete",
  initialState: {
    profile: {}
  },
  reducers: {},
})


export default userProfileSlice.reducer