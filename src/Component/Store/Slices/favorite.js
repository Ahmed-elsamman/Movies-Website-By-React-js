import { createSlice } from "@reduxjs/toolkit";

const favorite = createSlice({
  name: "favorite",
  initialState: { favMovies: [] },
  reducers: {
    addFavorite(state, action) {
      const index = state.favMovies.findIndex(
        (movie) => movie.id === action.payload.id
      );
      if (index === -1) {
        state.favMovies.push(action.payload);
      }
    },
    removeFavorite(state, action) {
      state.favMovies = state.favMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export let { addFavorite ,removeFavorite} = favorite.actions;

export default favorite.reducer;
