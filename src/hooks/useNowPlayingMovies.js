import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addnowPlayingMovies } from "../slice/moviesSlice";
import { API_OPTIONS, NOWPLAYING_URL } from "../utils/constants";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async() =>{
        const data = await fetch(NOWPLAYING_URL,API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addnowPlayingMovies(jsonData));
    }

    useEffect(() =>{
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;