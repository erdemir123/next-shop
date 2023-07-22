import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface initialState{
  user:ıLoginUser
}
const initialState = {
  user:{
    email:"",
    password:""
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ıLoginUser>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
