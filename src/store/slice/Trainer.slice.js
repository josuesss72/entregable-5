import { createSlice } from "@reduxjs/toolkit";

export const trainerSlice = createSlice({
  name: 'trainer',
  initialState: '',
  reducers: {
    setTrainerGlobal: (state, action) => action.payload
  }
})

export const {setTrainerGlobal} = trainerSlice.actions
export default trainerSlice.reducer