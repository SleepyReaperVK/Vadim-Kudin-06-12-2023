import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch, onDropdownChange, city, cityList }) => {
  const handleDropdownChange = (e) => {
    const selectedCityKey = e.target.value;
    const selectedCityContent = e.target.options[e.target.selectedIndex].getAttribute('content');
    onDropdownChange(selectedCityKey, selectedCityContent);
  };

  const filterCityList = (searchValue) => {
    const filteredCities = cityList.filter((item) =>
      `${item.AdministrativeArea.LocalizedName}, ${item.Country.LocalizedName}`
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    return filteredCities;
  };

  return (
    <Form.Group controlId="formCity">
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => {
          const searchValue = e.target.value;
          onSearch(searchValue);
          const filteredCities = filterCityList(searchValue);
        }}
      />
      {city.length > 2 && (
        <Form.Control as="select" multiple onChange={handleDropdownChange}>
          {cityList.map((item) => (
            <option key={item.Key} value={item.Key} content={`${item.AdministrativeArea.LocalizedName} , ${item.Country.LocalizedName}`}>
              {`${item.AdministrativeArea.LocalizedName} , ${item.Country.LocalizedName}`}
            </option>
          ))}
        </Form.Control>
      )}
    </Form.Group>
  );
};

export default SearchBar;
