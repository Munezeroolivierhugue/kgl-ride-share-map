import { APIProvider, Map, AdvancedMarker, useMap, useMapsLibrary} from "@vis.gl/react-google-maps";
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
const endingPoint = routeData[routeData.length - 1].location;

const MapComponent = ({ directionsRenderer }) => {
  console.log(directionsRenderer,"DIRECTIONDENDERER")
  return (
    <div className="h-screen w-auto">
      <APIProvider apiKey={"AIzaSyBmBJIWcBrbU8MWMVLj3psic3Hixqu3ojg"}>
        <Map zoom={13} center={startingPoint} mapId={"b9a94b95a3327099"}>
        {routeData.map((stop) => (
        <AdvancedMarker
          key={stop.location.lat + stop.location.lng}
          position={stop.location}
        />
      ))}
      <Directions/>
        </Map>
      </APIProvider>
    </div>
  );
};

function Directions(){
  const map = useMap();
  const waypoints = routeData.slice(1, -1).map((stop) => ({
    location: new window.google.maps.LatLng(stop.location.lat, stop.location.lng),
    stopover: true,
  }));
    const request = {
      origin: startingPoint,
      destination: endingPoint,
      waypoints,
      travelMode: 'DRIVING', // Allow customization here
    };
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [routes, setRoutes] = useState()
  console.log(waypoints,"[][]][][[][]][][][][][][][][][]")

  useEffect(()=>{
    if(!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService())
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({map}))

  }, [routesLibrary,map])
  
  useEffect(()=>{
    if(!directionsService || !directionsRenderer)return;
      directionsService.route(request).then(response => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      })
    
  },[directionsService,directionsRenderer])
}

export default MapComponent;
