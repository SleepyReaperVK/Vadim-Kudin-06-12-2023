const apikey = 'coIFScTcDdlpVuVwWxgsdISi51A888hh'
const fetchAutoComplete = async (city) => {
    try {
      const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${city}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error
    }
  };

  const fetchCurrentConditions = async (cityKey, setCityCurrentConditions) => {
    if(cityKey >= 1){ 
      try {
        const response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apikey}`);
        const data = await response.json();
        console.log('data1', data[0])
        setCityCurrentConditions(data[0]);
      } catch (error) {
        return error
      }
    }
    else{
     return console.error('InvalidKey');
    }
  };

  const fetch5DayConditions = async (cityKey, setCity5DayConditions) => {
    if (cityKey >= 1) {
      try {
        const response = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`);
        const data = await response.json();
        console.log('data2', data);
        setCity5DayConditions(data); // Assuming the 5-day forecast is in the 'DailyForecasts' property
      } catch (error) {
        return error
      }
    } else {
       console.error('InvalidKey');
    }
  };

  const getImageIconUrl = (imageIconNum) => {
    if (imageIconNum && imageIconNum < 10) {
      return `https://developer.accuweather.com/sites/default/files/0${imageIconNum}-s.png`;
    } else {
      return `https://developer.accuweather.com/sites/default/files/${imageIconNum}-s.png`;
    }
  };

  const getFavIconUrl = (isFavorited) => {
    if (isFavorited) {
      return `https://www.svgrepo.com/show/384408/favorite-heart-like-love-romance-valentine.svg`;
    } else {
      return `https://www.svgrepo.com/show/448767/favorite.svg`;
    }
  };

  export  { fetchAutoComplete, fetchCurrentConditions, fetch5DayConditions, getImageIconUrl, getFavIconUrl };