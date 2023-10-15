import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../slice/moviesSlice";
import userSlice from "../slice/userSlice";


const appStore = configureStore({
    reducer: {user: userSlice,
              movies: moviesSlice}
});

export default appStore;