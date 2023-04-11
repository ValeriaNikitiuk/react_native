import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {
    signUpUser(state, { payload }) {
      state.user = payload;
    },
    logInUser(state, { payload }) {
      state.user = payload;
    },
    logOutUser(state) {
      state.user = null;
    },
  },
});

export const { signUpUser, logInUser, logOutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
