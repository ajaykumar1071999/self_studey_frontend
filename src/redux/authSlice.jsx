import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {},
    isSuccessLoggedIn: false,
  },
  reducers: {
    getUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    getSuccessLoggedIn: (state, { payload }) => {
      state.isSuccessLoggedIn = payload;
    },
  },
});

export const { getUserInfo, getSuccessLoggedIn } = authSlice.actions;
export const authSelector = (state) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;
