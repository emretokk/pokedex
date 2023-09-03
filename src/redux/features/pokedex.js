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
    curPokemon: 0,
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
      state.nextPokemon++;
      console.log(action.payload);
    });
  },
});

export const { getNextPokemon } = pokedexSlice.actions;
export default pokedexSlice.reducer;
