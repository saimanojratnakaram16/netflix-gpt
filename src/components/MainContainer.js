import React from "react";
import { useSelector } from "react-redux";
import MovieTrailerData from "./MovieTrailerData";
import MovieTrailerVideo from "./MovieTrailerVideo";

function MainContainer() {
  const movieData = useSelector(
    (store) => store.movies.nowPlayingMovies?.results
  );
  if (!movieData) return;
  const movie = movieData[0];
  return (
    <div className="relative">
      <MovieTrailerData
        title={movie?.original_title}
        description={movie?.overview}
      />
      <MovieTrailerVideo movieId={movie?.id} />
    </div>
  );
}

export default MainContainer;
