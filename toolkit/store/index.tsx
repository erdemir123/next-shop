import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import filterSliceReducer from "../features/filterSlice"
import wishlistReducer from "../features/WishListSlice"
import cartReducer from "../features/authSlice"
// ...

export const store = configureStore({
  reducer: {
    filter: filterSliceReducer,
    auth: authReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;