import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {getStravaToken} from '../../helpers'



export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
   async () => {
    const result = await getStravaToken()
    return result
   }
)

const userProfileSlice = createSlice({
  name: "user",
  initialState: {
    profile: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state,  action ) => {
      state.user.profile = action.payload
    })
  },
})


export default userProfileSlice.reducer