import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../features/reducers";

export const store = configureStore({
  reducer: mainReducer,
});
