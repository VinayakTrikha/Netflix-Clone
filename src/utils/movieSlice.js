import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    searchedMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addSearchedMovies } = movieSlice.actions;

export default movieSlice.reducer;
