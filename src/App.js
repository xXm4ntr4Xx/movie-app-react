
import './App.css';
import {useState,useEffect} from 'react'
import Movie from './Movie';

const API_URL = 'http://www.omdbapi.com/?apikey=1ee386a0'


const App = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   searchMovies("Naruto");
  // }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
 
  return (
    <div className="app">
      <h1>Movie Search</h1>

      <div className="search">
        <input
          value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value)
            console.log(e.target.value)
          }}
          placeholder="Search for movies"
        />
        <button
        className='buttonSearch'
          onClick={(e) => {
            searchMovies(movieName)
            setMovieName('')
          }}
        > Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
