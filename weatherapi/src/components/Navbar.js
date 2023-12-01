import React , {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/store/actions'
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav } from 'react-bootstrap';


function Navbar() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    console.log('isDarkTheme:', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div>
      <Nav>
        <LinkContainer to="/">
          <Nav.Link>
            <Button variant="primary">Weather</Button>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/favorites">
          <Nav.Link>
            <Button variant="primary">Favorites</Button>
          </Nav.Link>
        </LinkContainer>
      </Nav>
      <div className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`}>
        <Button variant="info" onClick={handleToggleTheme}>
          Toggle Theme
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
