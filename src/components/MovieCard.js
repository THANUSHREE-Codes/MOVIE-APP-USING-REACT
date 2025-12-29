import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(MovieContext);
  
  // 1. Safety check: ensure movie exists before rendering
  if (!movie) return null;

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  // 2. Extract year safely
  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

  // 3. Image URL Construction (Added a check for the leading slash)
  const posterPath = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="movie-card">
      <div className="image-container">
        <Link to={`/movie/${movie.id}`}>
          <img 
            src={posterPath} 
            alt={movie.title} 
            loading="lazy"
          />
        </Link>
        {/* Floating Favorite Button - Moved inside image container */}
        <button 
          className={`fav-icon-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(movie)}
        
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-stats">
          <span className="year">{releaseYear}</span>
          <span className="rating">⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;