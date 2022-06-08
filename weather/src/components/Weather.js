import React, { useState, useEffect } from 'react'
import axios from 'axios'

const KEY = '5b2c3d5e340f4ff7bd422340220706'
const BASE_URL = 'http://api.weatherapi.com/v1'
// http://api.weatherapi.com/v1/current.json?key=5b2c3d5e340f4ff7bd422340220706&q=Atlanta&aqi=no

// Use props to pull the return JSON from Location.js
const Weather = (props) => {

  const [userWeather, setUserWeather] = useState({});
  const city = props.City
  const currentWeather = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`

  const getWData = async () => {
    try {
      const response = await axios.get(currentWeather);
      console.log(response.data);
      setUserWeather(response.data)
    }
    catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getWData();
  }, [])

  return (
    <>
      <h1>{props.City}</h1>
      <br />
      <h1>Lat={props.Lat}, Lon={props.Lon}</h1>
    </>
  )
}

export default Weather;

/*import csc from 'country-state-city';

const countryCode = 'US';
const country = csc.getCountryByCode(countryCode);
const states = csc.getStatesOfCountry(country.isoCode);
states.forEach((state) => {
    cities_of_state = csc.getCitiesOfState(countryCode, state.isoCode)
    console.log(state, ":", cities_of_state)
})*/

// Current weather = userWeather.current.condition.text
// Current weather icon = userWeather.current.condition.icon
// Last Updated = userWeather.current.last_updated
// Temperature F = userWeather.current.temp_f
// Real feel = userWeather.current.feelslike_f