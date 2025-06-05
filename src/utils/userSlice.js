import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  displayName: "",
  email: "",
  uid: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
