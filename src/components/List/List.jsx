import React from 'react'
import googleMapReact from 'google-map-react'
import { Paper, Box } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Rating } from '@mui/material'
// import

function List() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: '100%',
            height: 128,
          },
        }}
      >
        <Paper variant="outlined" />
      </Box>
    </>
  )
}

export default List