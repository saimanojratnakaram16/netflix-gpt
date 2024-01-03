import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: { nowPlayingMovies: null, mainDisplayVideo : null},
    reducers: {
        addnowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addMainDisplayVideo: (state,action) =>{
            state.mainDisplayVideo = action.payload;
        }

    }
}
);

export const {addnowPlayingMovies,addMainDisplayVideo} = moviesSlice.actions;

export default moviesSlice.reducer;