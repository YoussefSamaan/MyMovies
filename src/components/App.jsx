import MovieCarousel from "./MovieCarousel";
import Intro from "./Intro";
import '../css/App.css'

function App() {
  return (
    <div className="front-page">
      <Intro />
      <MovieCarousel />
    </div>
  );
}

export default App;
