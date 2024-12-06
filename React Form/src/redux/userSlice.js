import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedInUser: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    clearUser: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
