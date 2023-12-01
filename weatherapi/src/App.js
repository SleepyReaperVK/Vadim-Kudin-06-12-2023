import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import WeatherPage from './WeatherPage';
import FavoritesPage from './FavoritesPage';

function App() {
    // const apijson=useAPI()
 return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={WeatherPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Router>
 );
}

export default App;