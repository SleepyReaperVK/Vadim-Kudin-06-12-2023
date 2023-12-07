import React from 'react';
import { Card , Container } from 'react-bootstrap';

const FiveDayData = ({ city5DayConditions, formatObservationDateTime, fetchImageIcon }) => {
  return (
    <Container className="p-4 d-flex flex-row">
      {city5DayConditions && city5DayConditions.DailyForecasts && (
        <>
          {city5DayConditions.DailyForecasts.map((item) => (
            <Card key={item.EpochDate} className='p-2  mx-3'>
            <p>Local Date {formatObservationDateTime(item.Date)}</p>
              {fetchImageIcon && (
                <Card.Img
                  variant="top"
                  src={fetchImageIcon(item.Day.Icon)}
                  alt={`Weather Icon for ${item.Day.Icon}`}
                  onError={(e) => console.error('Error loading image:', e)}
                />
              )}
              <p>{item.Day.IconPhrase} ,{item.Temperature.Minimum.Value}/{item.Temperature.Maximum.Value} F </p>
            </Card>
          ))}
        </>
      )}
    </Container>
  );
};

export default FiveDayData;
