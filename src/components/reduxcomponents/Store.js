import { configureStore } from "@reduxjs/toolkit";
import waterCanReducer from "./Watercancount";

export const Store = configureStore({
  reducer: {
    water: waterCanReducer,
  },
});
