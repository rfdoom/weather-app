import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'



const Location = () => {

  const locationAPI = 'http://ip-api.com/json/'
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    try {
      const response = await axios.get(locationAPI);
      setUserData(response.data)
    }
    catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <>
      <Weather jsonData={userData} />
    </>

    
  )
}

export default Location;

//{Object.keys(userData).map((key) => <h1>{userData[key]}</h1>)} to get all JSON key values
// Line 28: this is how i pass parameters to Weather.js 