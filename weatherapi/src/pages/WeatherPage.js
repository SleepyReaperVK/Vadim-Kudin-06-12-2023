import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function WeatherPage() {
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);

  const fetchAutoComplete = async (city) => {
    try {
      const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=6Ihvh9Hhy84ZKD0ujd2VNgEkWmH7GeGu&q=${city}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  useEffect(() => {
    if (city.length >= 2) {
      const fetchData = async () => {
        const data = await fetchAutoComplete(city);
        setCityList(data);
      };
      console.log('fetching')
      fetchData();
    }
  }, [city]);



  const handleSearch = () => {
    // Add logic to fetch weather data for the city
  };

  const handleSave = () => {
    // Add logic to save the city as a favorite
  };

  const handleDropdownChange = (e) => {
    const selectedCityKey = e.target.value;
  
    // Now you can access both the key and other properties from selectedCity
    console.log('Selected key:', selectedCityKey);
 
    
    // Update the city input and setCityList with the selected city
    setCity(`${selectedCityKey}`);
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
              onChange={(e)=> setCity(e.target.value)}
            />
            {city.length > 0 && (
              <Form.Control as="select" multiple onChange={handleDropdownChange}>
                {cityList.map((item) => (
                  <option key={item.key} value={item.key}>
                    {`${item.AdministrativeArea.LocalizedName} , ${item.Country.LocalizedName}`}
                  </option>
                ))}
              </Form.Control>
            )}
          </Form.Group>
        </Col>
        <p>{city}</p>
      </Row>
    </Container>
  );
};

export default WeatherPage;