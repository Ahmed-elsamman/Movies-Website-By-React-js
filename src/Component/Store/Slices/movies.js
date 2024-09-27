import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesAction = createAsyncThunk("movies/getAll", async (page) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${page}`,{
    params: {
      api_key:"f42318924ae109a01cbbef3dcd684548"
    }
  });
  // const res = await axiosInstance.get(`/popular`);

  // console.log(res);

  return res.data.results;
});

const getMovies = createSlice({
  name: "movies",
  initialState: { movies: [], loader: false, error: null, page: 1 },
  extraReducers: (builder) => {
    builder.addCase(moviesAction.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(moviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.loader = false;
    });
    builder.addCase(moviesAction.rejected, (state, action) => {
      state.error = action.error.message;
      state.loader = false;
    });
  },
});

export default getMovies.reducer;
