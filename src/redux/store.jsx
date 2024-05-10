import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userListReducer from "./userListSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    userSlice: userListReducer,
  },
});

export default store;
