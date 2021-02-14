/* global google */
import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  DirectionsRenderer,
  InfoWindow

} from "react-google-maps";
import * as informations from "./informations";
import * as breads from "./bread";
import * as beds from "./beds";
import * as baths from "./bath";
import Rating from './rating.png';
import Bed from './bed.png';
import Bread from './bread.png';
import Bath from './bath.png';

//This is our map component
function Map() {
  const DirectionService = new window.google.maps.DirectionsService();

  const [direction, setDirection] = useState();

  DirectionService.route(
    {
      origin: new google.maps.LatLng(48.85837, 2.294481),
      destination: new google.maps.LatLng(48.85668, 2.3995703),
      travelMode: google.maps.TravelMode.DRIVING
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        setDirection(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    }
  );
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 48.856613, lng: 2.352222 }}
    >

      {beds.default.map((bed) => (
        <Marker
          key={bed.name}
          position={{ lat: bed.lat, lng: bed.lon }}
          icon={{
            url: Bed,
            origin: new window.google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 30),
            scaledSize: new window.google.maps.Size(35,35),
          }}
        />
      ))}

      {informations.default.map((information) => (
        <Marker
          key={information.name}
          position={{ lat: information.lat, lng: information.lon }}
          icon={{
            url: Rating,
            origin: new window.google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 30),
            scaledSize: new window.google.maps.Size(35,35),
          }}
        />
      ))}

      {breads.default.map((bread) => (
        <Marker
          key={bread.name}
          position={{ lat: bread.lat, lng: bread.lon }}
          icon={{
            url: Bread,
            origin: new window.google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 30),
            scaledSize: new window.google.maps.Size(35,35),
          }}
        />
      ))}

      {baths.default.map((bath) => (
        <Marker
          key={bath.name}
          position={{ lat: bath.lat, lng: bath.lon }}
          icon={{
            url: Bath,
            origin: new window.google.maps.Point(0,0),
            anchor: new google.maps.Point(20, 30),
            scaledSize: new window.google.maps.Size(35,35),
          }}
        />
      ))}
      {direction && <DirectionsRenderer directions={direction} />}
      
    </GoogleMap>
  );
}

//We need to wrap our map component here so it can load all the needed libraries
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
  return (
    <div>
  
      <div style={{ width: "100vw", height: "100vh" }}>
        <WrappedMap
        /*Here the API Key "AIzaSyAOXTJj2hDEfI1mBCQyM7g3B0hIncNPtnw"*/
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOXTJj2hDEfI1mBCQyM7g3B0hIncNPtnw&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}>
            <h1>Hola</h1>
          </WrappedMap>
      </div>
    </div>
  );
}

