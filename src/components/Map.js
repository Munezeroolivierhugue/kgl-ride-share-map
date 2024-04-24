import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places','routes'];
const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};
const center = {
  lat: -1.939826787816454, // default latitude
  lng: 30.0445426438232, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBmBJIWcBrbU8MWMVLj3psic3Hixqu3ojg',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        {isLoaded && <Marker key="Kigali" position={center} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
// google.maps.marker.AdvancedMarkerElement