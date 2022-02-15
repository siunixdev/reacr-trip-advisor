import React, { useState } from 'react'
import { Typography, InputLabel, MenuItem, FormControl, Select, Grid } from '@mui/material'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import { maxHeight } from '@mui/system'

const List = ({ places }) => {
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0)

  return (
    <div style={{ paddingLeft: '30px' }}>
      <Typography>Restaurants, Hotels & Attractions arround you</Typography>
      <FormControl fullWidth style={{ marginTop: '20px' }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ marginTop: '20px' }}>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rating}
          label="Rating"
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <div style={{ marginTop: '30px', maxHeight: '60vh', overflow: 'auto' }}>
        <Grid container spacing={3}>
          {
            places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  )
}

export default List