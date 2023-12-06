import React, { useState, useEffect  } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAutoComplete, fetchCurrentConditions, fetch5DayConditions ,getImageIconUrl } from '../data/fetchData';
import { useLocation } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import CurrentData from '../components/CurrentData';
import FiveDayData from '../components/FiveDayData';
import './WeatherPage.css'
import { setLocation } from '../redux/locationSlice';
import { addCityToFavorites ,removeKeyFromFavorites } from '../redux/favoritesSlice';
import DataFetch from '../data/DataFetch';

function WeatherPage() {
  const dispatch = useDispatch();
  const location = useLocation(); 
  const locationStore = useSelector((state) => state.location);
  const FavArr = useSelector((state) => state.favorite.favoritesArr);

  const [city, setCity] = useState('');
  const [cityKey, setCityKey] = useState(0); 
  const cityCurrentConditions=useSelector((state) => state.location.cityCurrentConditions);
  const city5DayConditions=useSelector((state) => state.location.city5DayConditions);

  const [cityList, setCityList] = useState([]);
  
  const [isFetchedData , setIsFetchedData] = useState(false)
const [weatherIconUrl, setWeatherIconUrl] = useState(null);
  


  useEffect(() => {
    
    if(!isFetchedData){

    if (city.length === 3) {
      const fetchData = async () => {
        const data = await fetchAutoComplete(city);
        setCityList(data);
      };
      setIsFetchedData(true)
      fetchData();
    }
    }
    else {
      if(city.length === 0)
      setIsFetchedData(false)
    }
  }, [city]);

  useEffect(() => {
    if (location.state && location.state.selectedCity) {
      const selectedCity = location.state.selectedCity;
      setCity(selectedCity.city);
      setCityKey(selectedCity.cityKey);
      dispatch(setLocation(selectedCity)); // Dispatch action to update Redux store
    }
  
    if (locationStore.hasLocation) {
      const {city,cityKey,currentConditions,fiveDayConditions} = locationStore;
      setCity(city);
      setCityKey(cityKey);
      // dispatch(setLocation(selectedCity)); 
    }
    console.log('updateFromStore' ,city,cityKey,cityCurrentConditions ,locationStore)
    // Add the properties from locationStore to the dependency array
  }, [location.state, locationStore]);
  

  
  
  const handleAddFav = () => {
    if(cityCurrentConditions)
    {
      console.log('addFav')
      dispatch(addCityToFavorites({cityKey , city , cityCurrentConditions ,city5DayConditions}))
    }
    console.log('clicked')
  }
  const handleRemoveFav = (cityKey) => {
    if(cityCurrentConditions)
    {
      dispatch(removeKeyFromFavorites(cityKey))
    }
  };
  const handleIsFav = (cityKey)=> {
    if(cityCurrentConditions)
    {
      
      const isCityKeyInFavorites = FavArr.some((favorite) => favorite.cityKey === cityKey);
      console.log('isCityKeyInFavorites', isCityKeyInFavorites)
      if (isCityKeyInFavorites) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  const formatObservationDateTime = (dateTimeString) => {
    const observationDateTime = new Date(dateTimeString);
        const minute = observationDateTime.getMinutes();
    const hour = observationDateTime.getHours();
    const day = observationDateTime.getDate();
    const month = observationDateTime.getMonth() + 1; // Months are zero-based
    const year = observationDateTime.getFullYear();
    const timeZone = observationDateTime.getTimezoneOffset();
    const customDateTime=`${minute}:${hour} - ${day}/${month}/${year} (${timeZone})`
    return  customDateTime;
  }
  

  
  
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h4>Weather Page</h4>
          <SearchBar
            onSearch={(value) => setCity(value)}
            onDropdownChange={(key, content) => {
              setCityKey(key);
              setCity(content);
            }}
            city={city}
            cityList={cityList}
          />
        </Col>
        <Col>
            <DataFetch cityKey={cityKey}  />
        </Col>
      </Row>

      <Row lg={2}>
        <Col lg={{ span: 'auto' }}>
          {cityCurrentConditions && 
          <CurrentData
            citykey={cityKey}
            cityCurrentConditions={cityCurrentConditions}
            formatObservationDateTime={formatObservationDateTime}
            weatherIconUrl={getImageIconUrl}
            onAddFav={handleAddFav}
            onRemoveFav={() => handleRemoveFav(cityKey)}
            isFav={handleIsFav(cityKey)}
          />}
          {city5DayConditions && 
          <FiveDayData
            city5DayConditions={city5DayConditions}
            formatObservationDateTime={formatObservationDateTime}
            fetchImageIcon={getImageIconUrl}
          />}
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherPage;