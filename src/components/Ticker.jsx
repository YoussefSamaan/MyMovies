import React from 'react';
import "../css/Ticker.css"
import MovieCard from "./MovieCard";


function Ticker(props) {

  let movieList = [...props.movieList, ...props.movieList]


  return (
      <div className='automatic-carousel'>

        {movieList.map((movieObject, index) => 
          <MovieCard
            key={index}
            animationDirection={props.animationDirection}
            animationTime={props.animationTime}
            name = {movieObject.name}
            image = {movieObject.image}
            finished = {movieObject.finished}
          />
        )}

        <div className='top-fadeaway' />

        <div className='bottom-fadeaway'/>

      </div>
  );
}

export default Ticker;