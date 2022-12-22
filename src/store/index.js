import { configureStore } from "@reduxjs/toolkit";
import trainerSlice from "./slice/Trainer.slice";

export default configureStore({
  reducer: {
    trainerSlice
  }
})
