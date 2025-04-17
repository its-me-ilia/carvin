import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

const reportOptionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    handleReportOption: (state, action) => {
      return action.payload;
    },
  },
});

export const { handleReportOption } = reportOptionSlice.actions;

export default reportOptionSlice.reducer;
