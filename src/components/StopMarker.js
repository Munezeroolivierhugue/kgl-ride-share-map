import React, { useState, useEffect } from "react";
import MapComponent from "./Map";

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

const StopsAndRoutes = () => {
  const [startingPoint, setStartingPoint] = useState(routeData[0].location);
  const [endingPoint, setEndingPoint] = useState(
    routeData[routeData.length - 1].location
  );
  const [selectedStopIndex, setSelectedStopIndex] = useState(null);

  const calculateRoute = () => {
    const waypoints = routeData.slice(1, -1).map((stop) => ({
      location: new window.google.maps.LatLng(
        stop.location.lat,
        stop.location.lng
      ), // Use google.maps.LatLng
      stopover: true,
    }));
    const request = {
      origin: startingPoint,
      destination: endingPoint,
      waypoints,
      travelMode: "driving", // Allow customization here
    };
    const directionsService = new DirectionsService();
    const newDirectionsRenderer = new DirectionsRenderer();
    directionsService.route(request, (response, status) => {
      if (status === "OK") {
        newDirectionsRenderer.setDirections(response);
        setDirectionsRenderer(newDirectionsRenderer);
      } else {
        console.error("Error fetching directions:", status);
      }
    });
    console.log(newDirectionsRenderer)
  };

  const handleInfoWindowClose = () => {
    setSelectedStopIndex(null);
  };

  return (
    <div>
      {/* Display stops information (descriptions, etc.) based on routeData */}
      <button onClick={calculateRoute}>Calculate Route</button>
      <MapComponent />
    </div>
  );
};

export default StopsAndRoutes;
