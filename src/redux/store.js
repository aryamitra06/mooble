import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie_details";

export default configureStore({
  reducer: {
    movie: movieReducer
  }
});