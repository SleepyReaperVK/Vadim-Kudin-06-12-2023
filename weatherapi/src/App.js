import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import WeatherPage from './WeatherPage';
import FavoritesPage from './FavoritesPage';

function App() {
    // const apijson=useAPI()
 return (
    <div>
      <div>
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" exact component={WeatherPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Routes>
    </div>
 );
}

export default App;