import React , {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CustomNavbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    console.log('isDarkTheme:', isDarkTheme);
  }, [isDarkTheme]);

  const linkStyle = {
    flexGrow: 1,
    fontWeight: 'bold',
    textDecoration: 'underline',
    textAlign: 'center',
  };
  const handleLinkedIn = () => {
   
    navigate('https://www.linkedin.com/in/vadim-kudin-5439aa23a/');
  };

  const handleWhatsApp = () => {

    navigate('https://wa.me/+9720545632346');
  };


  return (
    <Navbar className={`theme-${isDarkTheme ? 'dark' : 'light'}`} expand="xxl">
      <Navbar.Brand>Weather App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  className="justify-content-end">
      <Nav  variant="tabs" defaultActiveKey="/">
          <Nav.Link as={Link} to="/" style={linkStyle}>
            Weather
          </Nav.Link>
          <Nav.Link as={Link} to="/favorites" style={linkStyle}>
            Favorites
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Button variant="outline-secondary" className="full-width" onClick={handleToggleTheme}>Toggle Theme</Button>
        <Button variant="outline-secondary" className="full-width" onClick={()=>handleLinkedIn()}>LinkedIn</Button>
        <Button variant="outline-secondary" className="full-width" onClick={()=>handleWhatsApp()}>WhatsApp</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
