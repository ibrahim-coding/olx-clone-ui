import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../features/reducers";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
