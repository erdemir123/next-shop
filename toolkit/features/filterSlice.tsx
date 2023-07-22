import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    brands: [],
    categories: [],
    sort: "default",
};

const filterSlice  = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectBrand(state, action:PayloadAction<any>) {
        // state.brands.push(action.payload);
      },
      deselectBrand(state, action:PayloadAction<any>) {
        state.brands = state?.brands.filter((value) => value !== action.payload);
      },
      selectCategory(state, action:PayloadAction<any>) {
        // state.categories.push(action.payload);
      },
      deselectCategory(state, action) {
        state.categories = state.categories.filter(
          (value) => value !== action.payload
        );
      },
      chooseSort(state, action) {
        state.sort = action.payload;
      },
  },
});

export const { selectBrand, deselectBrand, selectCategory,deselectCategory,chooseSort } = filterSlice .actions;

export default filterSlice.reducer;
