import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { apiSlice } from "../app/api/apiSlice";

const mainReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  
});

export default mainReducer;
