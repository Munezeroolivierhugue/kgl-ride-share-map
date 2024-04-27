import { APIProvider, Map, AdvancedMarker} from "@vis.gl/react-google-maps";
import React, { useState, useEffect } from "react";

const routeData = [
  {
    location: { lat: -1.939826787816454, lng: 30.0445426438232 },
    description: "Starting Point: Nyabugogo",
  },
  {
    location: { lat: -1.9355377074007851, lng: 30.060163829002217 },
    description: "Stop A: Take a break or explore the area!",
  },
  {
    location: { lat: -1.9358808342336546, lng: 30.08024820994666 },
    description: "Stop B: Take a break or explore the area!",
  },
  {
    location: { lat: -1.9489196023037583, lng: 30.092607828989397 },
    description: "Stop C: Take a break or explore the area!",
  },
  {
    location: { lat: -1.9592132952818164, lng: 30.106684061788073 },
    description: "Stop D: Take a break or explore the area!",
  },
  {
    location: { lat: -1.9487480402200394, lng: 30.126596781356923 },
    description: "Stop E: Take a break or explore the area!",
  },
  {
    location: { lat: -1.9365670876910166, lng: 30.13020167024439 },
    description: "Ending Point: Kimironko",
  },
];
const startingPoint = routeData[0].location;

const MapComponent = ({ directionsRenderer }) => {
  console.log(directionsRenderer)
  return (
    <div className="h-screen w-auto">
      <APIProvider apiKey={"AIzaSyBmBJIWcBrbU8MWMVLj3psic3Hixqu3ojg"}>
        <Map zoom={15} center={startingPoint} mapId={"b9a94b95a3327099"}>
        {routeData.map((stop) => (
        <AdvancedMarker
          key={stop.location.lat + stop.location.lng}
          position={stop.location}
        />
      ))}
      {directionsRenderer && (
          <DirectionsRenderer directions={directionsRenderer.directions} />
        )}
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapComponent;
