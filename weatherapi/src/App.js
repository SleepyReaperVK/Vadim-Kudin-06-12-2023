import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import Axios from "axios";

function App() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const fetchDATA = (DATA) => {
    Axios.get(`MY_API/${DATA}`).then(
      (res) => {
        
      }
    );
  };

  // Use useEffect to apply styles when isDarkTheme changes
  useEffect(() => {
    console.log('isDarkTheme changed:', isDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;