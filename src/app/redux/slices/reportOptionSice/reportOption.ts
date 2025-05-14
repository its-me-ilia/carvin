import { createSlice } from "@reduxjs/toolkit";

const initialState: string = '';

const reportOptionSlice = createSlice({
  name: "reportOption",
  initialState,
  reducers: {
    handleReportOption: (state, action) => {
      return action.payload;
    },  
  },
});

export const { handleReportOption } = reportOptionSlice.actions;

export default reportOptionSlice.reducer;
