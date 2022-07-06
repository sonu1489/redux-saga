import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: { cats: [], isLoading: false, errMessage: null },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state, action) => {
      state.isLoading = false;
      state.errMessage = action.payload;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } =
  catSlice.actions;

export default catSlice.reducer;
