import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const WishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const {setItems} = WishListSlice.actions;

export default WishListSlice.reducer;
