import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    clearUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
