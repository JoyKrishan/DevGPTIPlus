
require('dotenv').config();

const WEATHER_API = process.env.WEATHER_API;

//Created these variables as examples & to make sure they could be used in the fetch calls.
//They can be updated to pull the relevant info from a fetch call to the postcode API
let LAT = 52.629729;
let LNG = -1.131592;

//Store responses in global variables so they can be accessed by other APIs?
let weatherData = '';
//Fetch request to the OpenWeather API. Triggered when the fetchWeather() function is called
  // API call url. The &units=metric bit returns the temperature in celcius
    weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LNG}&appid=${WEATHER_API}&units=metric`).then(res => res.json());
    const policeData = await fetch('https://data.police.uk/api/crimes-at-location?date=2017-02&lat=52.629729&lng=-1.131592').then(res => res.json());