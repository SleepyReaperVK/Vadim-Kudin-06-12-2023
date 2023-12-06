import React, { useState, useEffect } from "react";
import { fetchCurrentConditions, fetch5DayConditions } from "./fetchData";
import { useDispatch } from 'react-redux';
import { setLocation } from "../redux/locationSlice";

const DataFetch = ({ citykey  }) => {
    const dispatch = useDispatch();
    const [cityKey , setCityKey]=useState(215854)
  const [cityCurrentConditions, setCityCurrentConditions] = useState(null);
  const [city5DayConditions, setCity5DayConditions] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (cityKey) => {
    try {
      console.log('cityKey', cityKey)
      const currentConditionsData = await fetchCurrentConditions(cityKey , setCityCurrentConditions);
      const fiveDayConditionsData = await fetch5DayConditions(cityKey , setCity5DayConditions);
    } catch (error) {
      setError(error.message || "An error occurred while fetching data.");
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    if(citykey === 0 )
    {
      fetchData(cityKey);
    }
    else
    {
      fetchData(citykey)
    }
    
  }, [citykey]);


  if (error) {
    // Handle error here, you can replace this with your error handling logic
    return <div>Error: {error}</div>;
  }

  if (!cityCurrentConditions || !city5DayConditions) {
    // You can replace this with a loading indicator if needed
    return <div>Loading...</div>;
  }
  const cityName =( `${cityCurrentConditions.AdministrativeArea.LocalizedName} , ${cityCurrentConditions.Country.LocalizedName}`);
  const selectedLocation = {cityName , cityKey ,cityCurrentConditions ,city5DayConditions}
  dispatch(setLocation(selectedLocation))
  // Render your component with the fetched data
  return (
    null
  );
};

export default DataFetch;