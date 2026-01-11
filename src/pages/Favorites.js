import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieCard from '../components/MovieCard';

// const Favorites = () => {
//   const { favorites } = useContext(MovieContext);
//   return (
//     <div className="container">
//       <h2>My Favorites</h2>
//       <div className="movie-grid">
//         {favorites.map(m => <MovieCard key={m.id} movie={m} />)}
//       </div>
//     </div>
//   );
// };
const Favorites = () => {
  const { favorites } = useContext(MovieContext);
  return (
    <div className="favorites-container"> {/* This class is required for the fix */}
      <h2>My Favorites</h2>
      <div className="movie-grid">
        {favorites.map(m => <MovieCard key={m.id} movie={m} />)}
      </div>
    </div>
  );
};
export default Favorites;