import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Loader from './Loader'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

function Home() {

  useNowPlayingMovies();

  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
   
  )
}

export default Home
