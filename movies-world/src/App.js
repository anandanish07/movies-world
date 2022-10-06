import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=5ef4006";

const App = () => {
  const [searchTerm, setSearchTerm] = useState([]);
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const result = await fetch(`${API_URL}&s=${title}`);
    const data = await result.json();

    setMovies(data.Search);
  };
  console.log(movies);
  useEffect(() => {
    searchMovies("Avengers");
  }, []);
  return (
    <div className="app">
      <h1>Movie-world</h1>
      <div className="search">
        <input
          placeholder="search for movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
         ) : (
          <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
    }
    </div>
  );
}

export default App;
