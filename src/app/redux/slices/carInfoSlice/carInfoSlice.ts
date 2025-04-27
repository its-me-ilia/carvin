import { ICarInfo } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICarInfo[] = [];

const carInfoSlice = createSlice({
  name: "carInfo",
  initialState,
  reducers: {
    handleCarInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { handleCarInfo } = carInfoSlice.actions;

export default carInfoSlice.reducer;
