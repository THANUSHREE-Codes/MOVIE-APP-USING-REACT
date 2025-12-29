import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favs')) || []);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favorites));
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [favorites, darkMode]);

  const toggleFavorite = (movie) => {
    setFavorites(prev => prev.find(m => m.id === movie.id) 
      ? prev.filter(m => m.id !== movie.id) 
      : [...prev, movie]);
  };

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite, darkMode, setDarkMode }}>
      {children}
    </MovieContext.Provider>
  );
};