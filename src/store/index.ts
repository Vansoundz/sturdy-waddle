import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/data";

const store = configureStore({
  reducer: {
    data,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
