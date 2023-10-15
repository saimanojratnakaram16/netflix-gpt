import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Loader from './Loader'

function Home() {

  useNowPlayingMovies();

  return (
    <div>
      
    </div>
   
  )
}

export default Home
