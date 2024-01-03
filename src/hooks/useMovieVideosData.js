import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMainDisplayVideo } from "../slice/moviesSlice";
import { API_OPTIONS, MOVIE_VIDEOS_URL } from "../utils/constants";

const useMovieVideosData = () =>{
    const dispatch = useDispatch();
    const getVideosDetails = async() =>{
        const data = await fetch(MOVIE_VIDEOS_URL,API_OPTIONS);
        const jsonData = await data.json();
        console.log(jsonData);
        const trailerVideoDetails = jsonData?.results?.filter(video=>video.type === "Trailer")[0];
        dispatch(addMainDisplayVideo(trailerVideoDetails))
       }
       useEffect(()=>{
        getVideosDetails();
       },[]);
}

export default useMovieVideosData;