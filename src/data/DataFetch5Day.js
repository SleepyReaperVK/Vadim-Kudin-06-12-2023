import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetch5DayConditions } from './fetchData';
import {setCity5DayConditions}  from '../redux/locationSlice';

const DataFetch5Day = ({ cityKey }) => {
  const dispatch = useDispatch();
  const city5DayConditions = useSelector((state) => state.location.city5DayConditions);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch5DayConditions(cityKey);
        dispatch(setCity5DayConditions(data));
      } catch (error) {
        setError(error.message || "Error fetching 5-day conditions.");
      }
    };

    fetchData();
  }, [cityKey]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!city5DayConditions ) {
    return <div>Loading 5DayConditions...</div>;
  }

  return null;
};

export default DataFetch5Day;
