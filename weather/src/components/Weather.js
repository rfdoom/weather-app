import React, { useState, useEffect } from 'react'
import axios from 'axios'

const KEY = '5b2c3d5e340f4ff7bd422340220706'
const BASE_URL = 'http://api.weatherapi.com/v1'
// http://api.weatherapi.com/v1/current.json?key=5b2c3d5e340f4ff7bd422340220706&q=Atlanta&aqi=no

// Use props to pull the return JSON from Location.js
const Weather = (props) => {

  
  const { jsonData } = props; // this {} format is how i get the entire JSON data
  const [userWeather, setUserWeather] = useState({});

  const getWData = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${jsonData.lat},${jsonData.lon}&aqi=no`)
    .then(res => {
      setUserWeather(res.data)
    })
  }

  useEffect(() => {
    getWData();
  }, [])

  return (
    <>
      Latitude = { jsonData.lat }
      City = { jsonData.city }
      <br />
      {Object.keys(userWeather).map((key) => <h1>{userWeather[key]}</h1>)}
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
