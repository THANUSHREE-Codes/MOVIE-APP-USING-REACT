import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(MovieContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left Side: Logo */}
        <div className="nav-logo">
          <Link to="/">MOVIE<span>FLIX</span></Link>
        </div>

        {/* Right Side: Links and Toggle */}
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
          <button 
            className="theme-toggle" 
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;