import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentConditions } from './fetchData';
import { setCityCurrentConditions } from '../redux/locationSlice';

const DataFetchCurrentData = ({ cityKey }) => {
  const dispatch = useDispatch();
  const cityCurrentConditions = useSelector((state) => state.location.cityCurrentConditions);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentConditions(cityKey);
        console.log('data2', data)
        dispatch(setCityCurrentConditions(data));
      } catch (error) {
        setError(error.message || "Error fetching current conditions.");
      }
    };

    fetchData();
  }, [cityKey, dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cityCurrentConditions ) {
    return <div>Loading Current...</div>;
  }
  return null;
};

export default DataFetchCurrentData;
