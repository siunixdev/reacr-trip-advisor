import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material'
import { PhoneOutlined, LocationOnOutlined } from '@mui/icons-material';
import { Rating } from '@mui/material';

function PlaceDetails({ place }) {
  console.log(place);
  return (
    <>
      {
        place.name && (
          <Card style={{ backgroundColor: "#F5F5F5" }}>
            <CardMedia
              component="img"
              height={250}
              image={place.photo ? place.photo.images.large.url : "/images/default.jpg"}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" marginBottom={2}>
                {place.name}
              </Typography>
              <Box display="flex" marginBottom={2}>
                <LocationOnOutlined />
                <Typography variant="body2" color="text.secondary" marginLeft={2}>
                  {place.address}
                </Typography>
              </Box>
              <Box display="flex" marginBottom={2}>
                <PhoneOutlined />
                <Typography variant="body2" color="text.secondary" marginLeft={2}>
                  {place.phone}
                </Typography>
              </Box>
              <Box display="flex">
                {
                  place?.cuisine?.map((data, i) => (
                    <Chip label={data.name} key={i} variant='outlined' />
                  ))
                }
              </Box>
            </CardContent>
          </Card>
        )
      }
    </>
  )
}

export default PlaceDetails