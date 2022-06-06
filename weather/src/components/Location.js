import React, { useState, useEffect } from 'react'
import axios from 'axios'



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
      {Object.keys(userData).map((key) => <h1>{userData[key]}</h1>)}
    </>

    
  )
}

export default Location;