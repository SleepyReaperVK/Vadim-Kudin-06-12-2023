import React from 'react';
import { Typography, Button } from '@material-ui/core';

function FavoritesPage() {
 const favorites = []; // Replace with actual list of favorite cities

 const handleDelete = (city) => {
    // Add logic to remove the city from favorites
 };

 return (
    <div>
      <Typography variant="h4">Favorites Page</Typography>
      <ul>
        {favorites.map((city) => (
          <li key={city}>
            {city}
            <Button onClick={() => handleDelete(city)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
 );
}

export default FavoritesPage;