import { configureStore } from "@reduxjs/toolkit";
import pokedexSlice from "../features/pokedex";

export const store = configureStore({
  reducer: {
    pokedex: pokedexSlice,
  },
});
