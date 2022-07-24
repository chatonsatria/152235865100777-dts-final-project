import { configureStore } from "@reduxjs/toolkit";
import { RapidAPI } from "../services/RapidAPI";

const store = configureStore({
  reducer: {
    [RapidAPI.reducerPath]: RapidAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RapidAPI.middleware),
});

export default store;
