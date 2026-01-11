// import React, { createContext, useState, useEffect } from 'react';

// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favs')) || []);
//   const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

//   useEffect(() => {
//     localStorage.setItem('favs', JSON.stringify(favorites));
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
//     document.body.className = darkMode ? 'dark-mode' : '';
//   }, [favorites, darkMode]);

//   const toggleFavorite = (movie) => {
//     setFavorites(prev => prev.find(m => m.id === movie.id) 
//       ? prev.filter(m => m.id !== movie.id) 
//       : [...prev, movie]);
//   };

//   return (
//     <MovieContext.Provider value={{ favorites, toggleFavorite, darkMode, setDarkMode }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('my-favs');
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'true'; // Convert string back to boolean
  });

  // THE CRITICAL PART: This talks to the index.html body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', darkMode);
  }, [darkMode]);

  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      const exists = prev.find(m => m.id === movie.id);
      return exists ? prev.filter(m => m.id !== movie.id) : [...prev, movie];
    });
  };

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite, darkMode, setDarkMode }}>
      {children}
    </MovieContext.Provider>
  );
};