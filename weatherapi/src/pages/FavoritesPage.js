import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function FavoritesPage() {
  const favorites = []; // Replace with actual list of favorite cities

  const handleDelete = (city) => {
    // Add logic to remove the city from favorites
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h4>Favorites Page</h4>
          <ul>
            {favorites.map((city) => (
              <li key={city} className="d-flex justify-content-between align-items-center">
                {city}
                <Button variant="danger" onClick={() => handleDelete(city)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default FavoritesPage;
