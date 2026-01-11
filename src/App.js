
import React, { useState } from 'react'; // Fixes 'React' is not defined
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext'; // Fixes 'MovieProvider' is not defined
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Simplified useState

  return (
    <MovieProvider>
      <Router>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;