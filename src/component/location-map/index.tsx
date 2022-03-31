import React from "react";
import GoogleMapReact from 'google-map-react';
const LocationMap = () => {
    const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB8_Ea2_iDNJZI9gjxcaLrmWBHCnsy-QE8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact> */}
    </div>
  );
};

export default LocationMap;
