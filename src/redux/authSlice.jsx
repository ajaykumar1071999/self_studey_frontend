import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {},
    isSuccessLoggedIn: false,
    getClientList: [],
  },
  reducers: {
    getUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    getSuccessLoggedIn: (state, { payload }) => {
      state.isSuccessLoggedIn = payload;
    },
    getClientList: (state, { payload }) => {
      state.getClientList = payload;
      console.log("payload", payload);
    },
  },
});

export const { getUserInfo, getSuccessLoggedIn, getClientList } = authSlice.actions;
export const authSelector = (state) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;
