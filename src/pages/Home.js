import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const API_KEY = '45847da1622048289a8a330a06682c82';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const url = query 
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      : `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
   axios.get(url).then(res => {
  console.log(res.data.results); // Check if poster_path exists here!
  setMovies(res.data.results);
}).catch(err => console.error("Error fetching movies:", err));
  }, [query]);
return (
  <div className="container">
    <input 
      className="search-bar" 
      type="text" 
      placeholder="Search for movies..." 
      onChange={(e) => setQuery(e.target.value)} 
    />
    
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);
};
export default Home;