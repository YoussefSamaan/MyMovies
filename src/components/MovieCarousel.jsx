import React from 'react'
import Ticker from './Ticker'
import { movies } from "../Data/movieInfo";
import "../css/MovieCarousel.css"


function MovieCarousel() {

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const ShuffledMovies = shuffle(movies)
  const NumMovies = movies.length
  const moviesInEachCarousel = Math.round(NumMovies/4);
  const timeForMoviesSlow = (moviesInEachCarousel * 5) + "s"
  const timeForMoviesFast = (moviesInEachCarousel * 5 + 20) + "s"

  const movies1 = ShuffledMovies.slice(0, moviesInEachCarousel); 
  const movies2 = ShuffledMovies.slice(moviesInEachCarousel, 2*moviesInEachCarousel); 
  const movies3 = ShuffledMovies.slice(2*moviesInEachCarousel, 3*moviesInEachCarousel); 
  const movies4 = ShuffledMovies.slice(3*moviesInEachCarousel, NumMovies); 



  return (
    <div className='carousel'>
      <Ticker
        movieList={movies1} 
        animationDirection="scroll-down"
        animationTime={timeForMoviesFast}
      />

      <Ticker
        movieList={movies2} 
        animationDirection="scroll-up"
        animationTime={timeForMoviesSlow}
      />

      <Ticker
        movieList={movies3} 
        animationDirection="scroll-down"
        animationTime={timeForMoviesSlow}
      />

      <Ticker
        movieList={movies4} 
        animationDirection="scroll-up"
        animationTime={timeForMoviesFast}
      />

      {/* <Ticker
        movieList={movies1} 
        animationDirection="scroll-down"
        animationTime={timeForMoviesSlow}
      /> */}
    </div>
  )
}

export default MovieCarousel