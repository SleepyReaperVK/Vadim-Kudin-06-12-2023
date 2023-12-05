import React from 'react';
import { Container, Row, Col, Button , Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeKeyFromFavorites } from '../redux/favoritesSlice'; // Import your action creator
import { getImageIconUrl } from '../data/fetchData';
function FavoritesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorite.favoritesArr);

  const handleDelete = (cityIndex) => {
    dispatch(removeKeyFromFavorites(cityIndex));
  };

  const handleSelect = (selectedCity) => {
    navigate('/', { state: { selectedCity } });
  };

  return (
    <Container>
      <Row className="mt-5 rb">
        <Col>
          <h4>Favorites Page</h4>
          <ul>
            {favorites && favorites.length > 0 ? (
              favorites.map((city, index) => (
                <Row>
                  <Col>
                <lu key={index} >
                <Card style={{width:'30%' , hieght:'12%'}} className='p-auto  mx-3'>
                <Card.Img
                  variant="left"
                  src={getImageIconUrl(city.cityCurrentConditions.WeatherIcon)}
                  alt={`Weather Icon for ${city.cityKey}`}
                  onError={(e) => console.error('Error loading image:', e)}
                />
                  <p>City Key: {city.cityKey}</p>
                  <p>City: {city.city}</p>
                  <p>Conditions : {city.cityCurrentConditions.WeatherText}</p>
                </Card>
                </lu>
                </Col>
                <Col className="d-flex flex-col justify-content-center align-items-center">
                  <Button className='m-2'  variant="danger" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                  <Button className='m-2' variant="primary" onClick={() => handleSelect(city)}>
                    select
                  </Button>
                  </Col>
                </Row>
              ))
            ) : (
              <p>No favorite cities yet.</p>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default FavoritesPage;