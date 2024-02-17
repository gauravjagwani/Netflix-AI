import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import moodmagicReducer from "./moodmagicSlice";
import configReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    moodmagic: moodmagicReducer,
    config: configReducer,
  },
});

export default appStore;
