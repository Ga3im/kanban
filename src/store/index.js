import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice.js";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
