import { createSlice } from "@reduxjs/toolkit";

const usersListSlice = createSlice({
  name: "userSlice",
  initialState: {
    userList: [],
  },
  reducers: {
    getUserList: (state, { payload }) => {
      state.userList = payload;
      console.log("payload", payload);
    },
  },
});

export const { getUserList } = usersListSlice.actions;
export const usersListSelector = (state) => state.userSlice;
const userListReducer = usersListSlice.reducer;
export default userListReducer;
