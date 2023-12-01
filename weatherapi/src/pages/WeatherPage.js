import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function WeatherPage() {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    // Add logic to fetch weather data for the city
  };

  const handleSave = () => {
    // Add logic to save the city as a favorite
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h4>Weather Page</h4>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>{' '}
          <Button variant="success" onClick={handleSave}>
            Save as Favorite
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherPage;