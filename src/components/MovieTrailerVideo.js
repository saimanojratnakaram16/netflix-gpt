import React from 'react'
import { useSelector } from 'react-redux';
import useMovieVideosData from '../hooks/useMovieVideosData';
import { YOUTUBE_EMBED_URL } from "../utils/constants";
function MovieTrailerVideo(movieId) {
    useMovieVideosData();
    const trailerData = useSelector(store=>store.movies.mainDisplayVideo);
  return (
    <div className='w-screen'>
       <iframe
       className='w-screen aspect-video'
        src={YOUTUBE_EMBED_URL+trailerData?.key+"?&autoplay=1&mute=1"}
        controls = {0}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default MovieTrailerVideo
