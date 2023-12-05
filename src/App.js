import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CustomNavbar from './components/CustomNavbar';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import ErrorPage from './pages/404Page';

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
        <CustomNavbar />
      </div>
      <Routes>
        <Route path="/"  element={<WeatherPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path='/*' element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;