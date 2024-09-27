import { configureStore } from "@reduxjs/toolkit";

import language from "./Slices/language"
import moviesReducer from "./Slices/movies";
import favoriteReducer from "./Slices/favorite";


export const store =  configureStore({
    reducer: {
        // Add your reducers here
        lang: language,
        moviesStore:moviesReducer,
        favoriteMovies:favoriteReducer
    }
})