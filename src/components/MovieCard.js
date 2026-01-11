// 
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { MovieContext } from '../context/MovieContext';

// const MovieCard = ({ movie }) => {
//   const { favorites, toggleFavorite } = useContext(MovieContext);
  
//   if (!movie) return null;

//   const isFavorite = favorites.some((fav) => fav.id === movie.id);

//   // Extract year safely
//   const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

//   // Image URL Construction
//   const posterPath = movie.poster_path 
//     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
//     : "https://via.placeholder.com/500x750?text=No+Image";

//   return (
//     <div className="movie-card">
//       <div className="image-container">
//         <Link to={`/movie/${movie.id}`}>
//           <img 
//             src={posterPath} 
//             alt={movie.title} 
//             loading="lazy"
//           />
//         </Link>
//         <button 
//           className={`fav-icon-btn ${isFavorite ? 'active' : ''}`}
//           onClick={(e) => {
//             e.preventDefault(); // Prevents navigation to details page
//             toggleFavorite(movie);
//           }}
//         >
//           {isFavorite ? '❤️' : '🤍'}
//         </button>
//       </div>
      
//       {/* THIS SECTION IS WHAT DISPLAYS THE NAME AND YEAR */}
//       <div className="movie-info">
//         <h3>{movie.title}</h3>
//         <div className="movie-stats">
//           <span className="year">{releaseYear}</span>
//           <span className="rating">⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { MovieContext } from '../context/MovieContext';

// const MovieCard = ({ movie }) => {
//   const { favorites, toggleFavorite } = useContext(MovieContext);
  
//   if (!movie) return null;

//   const isFavorite = favorites.some((fav) => fav.id === movie.id);
//   const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

//   return (
//     <div className="movie-card">
//       <div className="image-container">
//         <Link to={`/movie/${movie.id}`}>
//     <img 
//   src={movie.poster_path 
//     ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` 
//     : "https://via.placeholder.com/342x513?text=No+Image"} 
//   alt={movie.title} 
//   loading="lazy"
// />
//         </Link>
//         <button 
//           className={`fav-icon-btn ${isFavorite ? 'active' : ''}`}
//           onClick={(e) => {
//             e.preventDefault();
//             toggleFavorite(movie);
//           }}
//         >
//           {isFavorite ? '❤️' : '🤍'}
//         </button>
//       </div>
      
//       <div className="movie-info">
//         <h3 className="movie-title">{movie.title}</h3>
//         <div className="movie-stats">
//           <span className="year">{releaseYear}</span>
//           {/* ADDED RATING HERE */}
//           <span className="rating">⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const { favorites, toggleFavorite } = useContext(MovieContext);
  
  if (!movie) return null;

  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';

  return (
    <div className="movie-card">
      <div className="image-container">
        <Link to={`/movie/${movie.id}`}>
          <img 
            src={movie.poster_path 
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` 
              : "https://via.placeholder.com/342x513?text=No+Image"} 
            alt={movie.title} 
            loading="lazy"
          />
        </Link>
        <button 
          className={`fav-icon-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(movie);
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-stats">
          <span className="year">{releaseYear}</span>
          <span className="rating">⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;