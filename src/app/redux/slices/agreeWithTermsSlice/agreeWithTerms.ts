import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = false;

const agreeWithTermsSlice = createSlice({
  name: "agreeWithTerms",
  initialState,
  reducers: {
    handleAgreeWithTerms: (state, action) => {
      return !action.payload;
    },  
  },
});

export const { handleAgreeWithTerms } = agreeWithTermsSlice.actions;

export default agreeWithTermsSlice.reducer;
