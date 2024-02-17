import { createSlice } from "@reduxjs/toolkit";

const moodmagicSlice = createSlice({
  name: "moodmagic",
  initialState: {
    showMoodMagic: false,
    gptMovies: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleMoodMagicView: (state, action) => {
      state.showMoodMagic = !state.showMoodMagic;
    },
    addmoviemagicResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { toggleMoodMagicView, addmoviemagicResult } =
  moodmagicSlice.actions;
export default moodmagicSlice.reducer;
