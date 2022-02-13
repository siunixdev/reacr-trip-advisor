import React from 'react'
import { CssBaseline, Grid } from '@mui/material'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} mt={1} style={{ width: '100%' }}>
        <Grid item xs={12} md={4} lg={3}>
          <List />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Map />
        </Grid>
      </Grid>
    </>
  )
}

export default App