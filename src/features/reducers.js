import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

const mainReducer = combineReducers({
  auth: authReducer,
});

export default mainReducer;
