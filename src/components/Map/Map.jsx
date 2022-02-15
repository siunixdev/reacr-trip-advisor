import React from 'react'
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { Rating } from '@mui/material'
import { MapContainer } from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }} // YOUR API KEY
          defaultCenter={{ lat: 0, lng: 0 }}
          center={coordinates}
          defaultZoom={14}
          margin={50}
          options={''}
          onChange={(e) => {
            setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }}
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