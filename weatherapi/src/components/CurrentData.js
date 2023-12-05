import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CurrentData = ({ cityey, cityCurrentConditions, formatObservationDateTime, weatherIconUrl, addFav ,onRemoveFav ,isFav }) => {

  return (
    <Card style={{ width: '65%', marginTop:10 }} className="p-2">
      {cityCurrentConditions && (
        <>
          {weatherIconUrl && <Card.Img style={{ width: '45%' }} variant="top"  src={weatherIconUrl} />}
          <p>Local Observation Date Time: {formatObservationDateTime(cityCurrentConditions.LocalObservationDateTime)}</p>
          <p>Weather Text: {cityCurrentConditions.WeatherText}</p>
          <p>Temperature: {cityCurrentConditions.Temperature?.Imperial?.Value} °F</p>
          {isFav?
          <Button variant="dark" onClick={addFav}>
            Add to Favorites
          </Button> :
          <Button variant="dark" onClick={onRemoveFav}>
            Remove to Favorites
          </Button>
          }
        </>
      )}
    </Card>
  );
};

export default CurrentData;
