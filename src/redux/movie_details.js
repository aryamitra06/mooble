import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMovieByTitle = createAsyncThunk('getMovieByTitleThunk', async (movie_title) => {
    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=9cb4c893&t=${movie_title}`);
        return response;
    } catch (error) {
        return error;
    }
})

export const getMovieByTitleSlice = createSlice({
    name: 'getMovieByTitleSlice',
    initialState: {
        movie: [],
        status: 'idle',
        error: null
    },
    extraReducers: {
        [getMovieByTitle.pending]: (state, action) => {
            state.movie = [];
            state.status = 'loading';
            state.error = null;
        },
        [getMovieByTitle.fulfilled]: (state, action) => {
            state.movie = action.payload;
            state.status = 'success';
            state.error = null;
        },
        [getMovieByTitle.rejected]: (state, action) => {
            state.movie = [];
            state.status = 'fail';
            state.error = 'error';
        },
    }
})

export default getMovieByTitleSlice.reducer;