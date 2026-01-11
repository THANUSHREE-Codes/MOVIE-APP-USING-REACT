// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import MovieCard from '../components/MovieCard';

// const API_KEY = '45847da1622048289a8a330a06682c82';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     const url = query 
//       ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
//       : `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
//     axios.get(url).then(res => setMovies(res.data.results));
//   }, [query]);

// return (
//   <div className="container">
//     <input 
//       className="search-bar" 
//       type="text" 
//       placeholder="Search for movies..." 
//       onChange={(e) => setQuery(e.target.value)} 
//     />
    
//     <div className="movie-grid">
//       {movies.map(movie => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   </div>
// );
// };
// export default Home;
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import MovieCard from '../components/MovieCard';

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   const API_KEY = "45847da1622048289a8a330a06682c82"; // PUT YOUR KEY HERE
//   const observer = useRef();

//   // This detects when the last movie on the screen is reached
//   const lastMovieElementRef = useCallback(node => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();

//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting && hasMore) {
//         setPage(prevPage => prevPage + 1);
//       }
//     });

//     if (node) observer.current.observe(node);
//   }, [loading, hasMore]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
//         );
//         const data = await res.json();
        
//         // Combine old movies with new movies
//         setMovies(prev => [...prev, ...data.results]);
//         setHasMore(data.page < data.total_pages);
//       } catch (err) {
//         console.error("Fetch error:", err);
//       }
//       setLoading(false);
//     };

//     fetchMovies();
//   }, [page, API_KEY]);

//   return (
//     <div className="home-container">
//       <div className="movie-grid">
//         {movies.map((movie, index) => {
//           if (movies.length === index + 1) {
//             return (
//               <div ref={lastMovieElementRef} key={`${movie.id}-${index}`}>
//                 <MovieCard movie={movie} />
//               </div>
//             );
//           } else {
//             return <MovieCard key={`${movie.id}-${index}`} movie={movie} />;
//           }
//         })}
//       </div>
      
//       {loading && <div className="loading-trigger">🚀 Loading more movies...</div>}
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect, useRef, useCallback } from 'react';
import MovieCard from '../components/MovieCard';

const Home = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const API_KEY = "45847da1622048289a8a330a06682c82";
  const observer = useRef();

  const lastMovieElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Reset movies when search changes
  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [searchTerm]);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const endpoint = searchTerm 
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

        const res = await fetch(endpoint);
        const data = await res.json();
        
        setMovies(prev => page === 1 ? data.results : [...prev, ...data.results]);
        setHasMore(data.page < data.total_pages);
      } catch (err) {
        console.error("Fetch error:", err);
      }
      setLoading(false);
    };

    fetchMovies();
  }, [page, searchTerm]);

  return (
    <div className="home-container">
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div ref={movies.length === index + 1 ? lastMovieElementRef : null} key={`${movie.id}-${index}`}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      {loading && <div style={{textAlign: 'center', padding: '20px'}}>Loading...</div>}
    </div>
  );
};

export default Home;