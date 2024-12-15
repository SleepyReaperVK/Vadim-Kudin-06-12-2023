import React, { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

const CustomTypeHead = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((resp) => resp.json())
      .then((json) => {
        setIsLoading(false);
        setOptions(json.items);
      });
  };

  return (
    <AsyncTypeahead
        id='async_typeahead_city'
      isLoading={isLoading}
      labelKey={(option) => `${option.login}`}
      onSearch={handleSearch}
      options={options}
    />
  );
};

export default CustomTypeHead;