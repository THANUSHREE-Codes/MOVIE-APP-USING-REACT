// // // import { useState, useEffect, useContext } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';
// // // import { MovieContext } from '../context/MovieContext';

// // // const API_KEY = '45847da1622048289a8a330a06682c82';

// // // const MovieDetails = () => {
// // //   const { id } = useParams(); // Extracts the ID from the URL
// // //   const [movie, setMovie] = useState(null);
// // //   const { favorites, toggleFavorite } = useContext(MovieContext);

// // //   useEffect(() => {
// // //     const fetchDetails = async () => {
// // //       try {
// // //         const res = await axios.get(
// // //           `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
// // //         );
// // //         setMovie(res.data);
// // //       } catch (error) {
// // //         console.error("Error fetching movie details:", error);
// // //       }
// // //     };
// // //     fetchDetails();
// // //   }, [id]);

// // //   if (!movie) return <div className="container">Loading...</div>;

// // //   const isFavorite = favorites.some((m) => m.id === movie.id);

// // // //   return (
// // // //     <div className="container details-page">
// // // //       <div className="details-flex">
// // // //        <img 
// // // //   src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
// // // //   alt={movie.title} 
// // // //   className="details-poster"
// // // // />
// // // //         <div className="details-info">
// // // //           <h1>{movie.title}</h1>
// // // //           <p className="tagline"><i>{movie.tagline}</i></p>
// // // //           <p><strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}</p>
// // // //           <p><strong>Runtime:</strong> {movie.runtime} min</p>
// // // //           <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
// // // //           <h3>Overview</h3>
// // // //           <p>{movie.overview}</p>
          
// // // //           <button 
// // // //             className={`fav-btn ${isFavorite ? 'active' : ''}`}
// // // //             onClick={() => toggleFavorite(movie)}
// // // //           >
// // // //             {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // return (
// // //   <div className="details-container">
// // //     <div className="details-image">
// // //       <img 
// // //         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
// // //         alt={movie.title} 
// // //       />
// // //     </div>
    
// // //     <div className="details-info">
// // //     <h1>{movie.title}</h1>
// // //           <p className="tagline"><i>{movie.tagline}</i></p>
// // //           <p><strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}</p>
// // //          <p><strong>Runtime:</strong> {movie.runtime} min</p>
// // //           <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
// // //           <h3>Overview</h3>
// // //           <p>{movie.overview}</p>
          
// // //           <button 
// // //             className={`fav-btn ${isFavorite ? 'active' : ''}`}
// // //             onClick={() => toggleFavorite(movie)}
// // //           >
// // //             {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
// // //           </button>
// // //         </div>
// // //       </div>
// // //   );
// // // };

// // // export default MovieDetails;


// // import React, { useEffect, useState, useContext } from "react";
// // import { useParams } from "react-router-dom";
// // import { MovieContext } from "../context/MovieContext";

// // const MovieDetails = () => {
// //   const { id } = useParams();
// //   const [movie, setMovie] = useState(null);
// //   const { favorites, toggleFavorite } = useContext(MovieContext);

// //   useEffect(() => {
// //     // Replace 'YOUR_API_KEY' with your actual TMDB API Key
// //     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`)
// //       .then((res) => res.json())
// //       .then((data) => setMovie(data))
// //       .catch((err) => console.error(err));
// //   }, [id]);

// //   if (!movie) return <div className="loading">Loading...</div>;

// //   const isFavorite = favorites.some((fav) => fav.id === movie.id);

// //   return (
// //     <div className="movie-details-page">
// //       <div className="details-wrapper">
        
// //         {/* Left Side: Poster */}
// //         <div className="poster-column">
// //           <img
// //             src={movie.poster_path 
// //               ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
// //               : "https://via.placeholder.com/500x750?text=No+Poster"}
// //             alt={movie.title}
// //             className="main-poster"
// //           />
// //         </div>

// //         {/* Right Side: Content */}
// //         <div className="info-column">
// //           <h1 className="movie-title">{movie.title}</h1>
// //           <p className="movie-tagline">{movie.tagline}</p>

// //           <div className="stats-bar">
// //             <span>⭐ {movie.vote_average?.toFixed(1)} Rating</span>
// //             <span className="dot">•</span>
// //             <span>{movie.runtime} min</span>
// //             <span className="dot">•</span>
// //             <span>{movie.release_date?.split("-")[0]}</span>
// //           </div>

// //           <div className="genre-tags">
// //             {movie.genres?.map((g) => (
// //               <span key={g.id} className="genre-pill">{g.name}</span>
// //             ))}
// //           </div>

// //           <div className="overview-section">
// //             <h3>Overview</h3>
// //             <p>{movie.overview}</p>
// //           </div>

// //           {/* Interactive Animated Button */}
// //           <button
// //             className={`interactive-fav-btn ${isFavorite ? "active" : ""}`}
// //             onClick={() => toggleFavorite(movie)}
// //           >
// //             <div className="btn-content">
// //               <span className="heart-anim">{isFavorite ? "❤️" : "🤍"}</span>
// //               <span>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</span>
// //             </div>
// //             <div className="btn-glow"></div>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MovieDetails;
// // import React, { useEffect, useState, useContext } from "react";
// // import { useParams } from "react-router-dom";
// // import { MovieContext } from "../context/MovieContext";

// // const MovieDetails = () => {
// //   const { id } = useParams();
// //   const [movie, setMovie] = useState(null);
// //   const [cast, setCast] = useState([]); // State for actors
// //   const { favorites, toggleFavorite } = useContext(MovieContext);

// //   const API_KEY = "45847da1622048289a8a330a06682c82"; // Replace with your actual TMDB Key

// //   useEffect(() => {
// //     // 1. Fetch Movie Details
// //     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
// //       .then((res) => res.json())
// //       .then((data) => setMovie(data))
// //       .catch((err) => console.error(err));

// //     // 2. Fetch Credits (Actors)
// //     fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
// //       .then((res) => res.json())
// //       .then((data) => setCast(data.cast.slice(0, 6))) // Take top 6 actors
// //       .catch((err) => console.error(err));
// //   }, [id, API_KEY]);

// //   if (!movie) return <div className="loading">Loading...</div>;

// //   const isFavorite = favorites.some((fav) => fav.id === movie.id);

// //   return (
// //     <div className="movie-details-page">
// //       <div className="details-wrapper">
        
// //         {/* Left Side: Poster */}
// //         <div className="poster-column">
          
// // <img
// //   src={movie.poster_path 
// //     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
// //     : "https://via.placeholder.com/500x750?text=No+Poster"}
// //   alt={movie.title}
// //   className="main-poster"
// // />
// //         </div>

// //         {/* Right Side: Content */}
// //         <div className="info-column">
// //           <h1 className="movie-title">{movie.title}</h1>
// //           <p className="movie-tagline">{movie.tagline}</p>

// //           <div className="stats-bar">
// //             <span>⭐ {movie.vote_average?.toFixed(1)} Rating</span>
// //             <span className="dot">•</span>
// //             <span>{movie.runtime} min</span>
// //             <span className="dot">•</span>
// //             <span>{movie.release_date?.split("-")[0]}</span>
// //           </div>

// //           <div className="genre-tags">
// //             {movie.genres?.map((g) => (
// //               <span key={g.id} className="genre-pill">{g.name}</span>
// //             ))}
// //           </div>

// //           <div className="overview-section">
// //             <h3>Overview</h3>
// //             <p>{movie.overview}</p>
// //           </div>

// //           {/* ACTORS SECTION */}
// //           <div className="cast-section">
// //             <h3>Top Cast</h3>
// //             <div className="cast-grid">
// //               {cast.map((actor) => (
// //                 <div key={actor.id} className="actor-card">
// //                   <img 
// //   src={actor.profile_path 
// //     ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` 
// //     : "https://via.placeholder.com/185x278?text=No+Pic"} 
// //   alt={actor.name} 
// // />

                  
// //                   <p className="actor-name">{actor.name}</p>
// //                   <p className="character-name">{actor.character}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <button
// //             className={`interactive-fav-btn ${isFavorite ? "active" : ""}`}
// //             onClick={() => toggleFavorite(movie)}
// //           >
// //             <div className="btn-content">
// //               <span className="heart-anim">{isFavorite ? "❤️" : "🤍"}</span>
// //               <span>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</span>
// //             </div>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MovieDetails;
// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { MovieContext } from "../context/MovieContext";

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [cast, setCast] = useState([]);
//   const { favorites, toggleFavorite } = useContext(MovieContext);
//   const API_KEY = "45847da1622048289a8a330a06682c82";

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
//       .then((res) => res.json())
//       .then((data) => setMovie(data));

//     fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
//       .then((res) => res.json())
//       .then((data) => setCast(data.cast.slice(0, 6)));
//   }, [id]);

//   if (!movie) return <div className="loading">Loading...</div>;
//   const isFavorite = favorites.some((fav) => fav.id === movie.id);

//   return (
//     <div className="movie-details-page">
//       <div className="details-wrapper" style={{display: 'flex', gap: '40px', padding: '40px'}}>
//         <div className="poster-column">
//           <img
//             src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"}
//             alt={movie.title}
//             style={{width: '300px', borderRadius: '15px'}}
//           />
//         </div>

//         <div className="info-column">
//           <h1>{movie.title}</h1>
//           <p>{movie.overview}</p>

//           <h3>Top Cast</h3>
//           <div className="cast-grid" style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
//             {cast.map((actor) => (
//               <div key={actor.id} className="actor-card" style={{width: '100px', textAlign: 'center'}}>
//                 <img 
//                   src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : "https://via.placeholder.com/185x278"} 
//                   alt={actor.name} 
//                   style={{width: '100%', borderRadius: '10px'}}
//                 />
//                 <p style={{fontSize: '0.8rem'}}>{actor.name}</p>
//               </div>
//             ))}
//           </div>

//           <button onClick={() => toggleFavorite(movie)} className="interactive-fav-btn">
//             {isFavorite ? "❤️ Remove" : "🤍 Add to Favorites"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const { favorites, toggleFavorite } = useContext(MovieContext);
  const API_KEY = "45847da1622048289a8a330a06682c82";

  useEffect(() => {
    // Fetch Movie Details
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));

    // Fetch Cast
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCast(data.cast.slice(0, 6)));
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="movie-details-page">
      <div className="details-wrapper">
        <div className="poster-column">
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750"}
            alt={movie.title}
            className="main-poster"
          />
        </div>

        <div className="info-column">
          <h1>{movie.title}</h1>

          {/* ADDED: META INFO (Rating, Time, Year) */}
          <div className="movie-meta">
            <span className="rating-pill">⭐ {movie.vote_average?.toFixed(1)}</span>
            <span className="runtime-pill">⏱️ {movie.runtime} min</span>
            <span className="year-pill">{movie.release_date?.split('-')[0]}</span>
          </div>

          {/* ADDED: GENRES */}
          <div className="genre-container">
            {movie.genres?.map(genre => (
              <span key={genre.id} className="genre-pill">{genre.name}</span>
            ))}
          </div>

          <div className="overview-section">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>

          <h3>Top Cast</h3>
          <div className="cast-grid">
            {cast.map((actor) => (
              <div key={actor.id} className="actor-card">
                <img 
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : "https://via.placeholder.com/185x278"} 
                  alt={actor.name} 
                />
                <p className="actor-name">{actor.name}</p>
              </div>
            ))}
          </div>

          <button onClick={() => toggleFavorite(movie)} className="interactive-fav-btn">
            {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
