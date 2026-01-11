// 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { darkMode, setDarkMode } = useContext(MovieContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">MOVIE<span>MANIA</span></Link>
        </div>

        {/* SEARCH BAR IN MIDDLE */}
        <div className="nav-search-wrapper">
          <input 
            type="text" 
            placeholder="Search movies..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="nav-search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        {/* Links and Toggle */}
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;