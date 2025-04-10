import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = '';

const vinSlice = createSlice({
  name: "vin",
  initialState,
  reducers: {
    handleVin: (state, action) => {
      return action.payload
    }
  },
});

export const { handleVin } =
  vinSlice.actions;

export default vinSlice.reducer;

