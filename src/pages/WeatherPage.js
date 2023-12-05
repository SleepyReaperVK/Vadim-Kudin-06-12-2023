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

function WeatherPage() {
  const dispatch = useDispatch();
  const location = useLocation(); 
  const locationStore = useSelector((state) => state.location);
  const FavArr = useSelector((state) => state.favorite.favoritesArr);

   const [city, setCity] = useState(locationStore.city || '');
  const [cityKey, setCityKey] = useState(locationStore.key || 0); 
  const [cityCurrentConditions, setCityCurrentConditions] = useState(locationStore.cityCurrentConditions || null); 
  const [city5DayConditions, setCity5DayConditions] = useState(locationStore.city5DayConditions || null); 

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
      console.log('fetching')
      console.log('cityList', cityList)
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
      setCityCurrentConditions(selectedCity.cityCurrentConditions)
      setCity5DayConditions(selectedCity.city5DayConditions)
      dispatch(setLocation(selectedCity)); // Dispatch action to update Redux store
    }
  }, [location.state]);
  

  
  
  const handleAddFav = () => {
    if(cityCurrentConditions)
    {
      dispatch(addCityToFavorites({cityKey , city , cityCurrentConditions ,city5DayConditions}))
    }
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
              
          <Button variant="dark" onClick={() => fetchCurrentConditions(cityKey, setCityCurrentConditions)}>
            GetCurrentData
          </Button>
          <Button variant="dark" onClick={() => fetch5DayConditions(cityKey, setCity5DayConditions)}>
            Get5DayData
          </Button>
         
        </Col>
      </Row>

      <Row lg={2}>
        <Col lg={{ span: 'auto' }}>
          {cityCurrentConditions && 
          <CurrentData
            citykey={cityKey}
            cityCurrentConditions={cityCurrentConditions}
            formatObservationDateTime={formatObservationDateTime}
            weatherIconUrl={weatherIconUrl}
            onAddFav={() => handleAddFav(cityCurrentConditions)}
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