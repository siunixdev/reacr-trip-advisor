import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@mui/material'

import { getPlacesData } from './api/index'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

function App() {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    // console.log(coordinates, bounds);
    bounds &&
      getPlacesData(bounds.sw, bounds.ne)
        .then((data) => {
          console.log(data);
          setPlaces(data)
        })
  }, [coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} mt={1} style={{ width: '100%' }}>
        <Grid item xs={12} md={4} lg={3}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  )
}

export default App