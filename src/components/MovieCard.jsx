import '../css/MovieCard.css';

function MovieCard(props) {

  return (
    <div 
    className="movie-container"
  
    style={{animation: `${props.animationDirection} ${props.animationTime} linear infinite`}}
    >

      <img
        className="movie-image" 
        src={props.image} 
        alt={props.name}
      />

      <div className="movie-info-box">
        <div 
          className="movie-info">
          <h1 className="text-center">
            {props.name}
          </h1>
          <p className="text-center">
            Finished:
          </p>
          <p className="text-center">
            {props.finished}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;