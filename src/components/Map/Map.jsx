import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Rating } from '@mui/material'
import { MapContainer } from './styles';

function Map() {

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const coordinates = { lat: 0, lng: 0 }

  return (
    <>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }} // YOUR API KEY
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={50}
          options={''}
          onChange={''}
          onChildClick={''}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </MapContainer>
    </>
  )
}

export default Map