import { ICarInfo } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICarInfo[] = [];

const carInfoSlice = createSlice({
  name: "carInfo",
  initialState,
  reducers: {
    handleCarInfo: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { handleCarInfo } = carInfoSlice.actions;

export default carInfoSlice.reducer;
