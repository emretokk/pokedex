import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemon = createAsyncThunk("getPokemon", async (id) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data;
});

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    loading: true,
    nextPokemon: 1,
    prevPokemon: 1,
    curPokemon: 1,
    pokeImg: "",
    pokeName: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.pokeName = action.payload.name;
      state.curPokemon = action.payload.id;
      state.pokeImg = action.payload.sprites.front_default;
      if (state.curPokemon != 1) {
        state.prevPokemon = state.curPokemon - 1;
        state.nextPokemon = state.curPokemon + 1;
      } else if (state.curPokemon == 1) {
        state.nextPokemon = state.curPokemon + 1;
        state.prevPokemon = state.curPokemon;
      }
    });
  },
});

export const { getNextPokemon } = pokedexSlice.actions;
export default pokedexSlice.reducer;
