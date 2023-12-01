import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Navbar() {
 return (
    <div>
      <Link to="/">
        <Button>Weather</Button>
      </Link>
      <Link to="/favorites">
        <Button>Favorites</Button>
      </Link>
    </div>
 );
}

export default Navbar;