import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';


function App() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  document.body.classList.toggle('dark-theme', isDarkTheme);

 
  useEffect(() => {
    console.log('isDarkTheme changed:', isDarkTheme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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