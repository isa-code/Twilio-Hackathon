/* global google */
import React from 'react';
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker   
  
  } from "react-google-maps";
  //install react-google-maps pour avoir les dependencies de google maps

  function Maps (){

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap //on va établir le type de zoom pour la carte et la localisation par defaut.
        defaultZoom={12}
        defaultCenter={{ lat: 48.81897912, lng: 2.42294885 }}
        
      >
      
          {/*Avec les Marker on va mettre les marqueurs dans la carte*/}
        <Marker
          position={{ 
            lat: 48.81897912, 
            lng: 2.42294885 }}
        />
        <Marker
          position={{ 
            lat: 48.8724856, 
            lng: 2.33490347 }}
        />
        <Marker
          position={{ 
            lat: 48.84672719, 
            lng: 2.28643757 }}
        />

        <Marker
          position={{ 
            lat: 48.858358, 
            lng: 2.28194093 }}
        />
        <MarkerWithLabel
      position={{ lat: 48.84672719, lng: 2.28643757 }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
    >
      <div>Hello There!</div>
    </MarkerWithLabel>

        
        
      
      </GoogleMap>
    ));
    return(

        <div className="mapStyle">
              {/*Ici on va recuperer les informations de google Maps, et la KEY-API c'est "AIzaSyAOXTJj2hDEfI1mBCQyM7g3B0hIncNPtnw"*/}
      <MapWithAMarker
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOXTJj2hDEfI1mBCQyM7g3B0hIncNPtnw&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `350px` }} />}
  containerElement={<div style={{ height: `300px` }} />}
  mapElement={<div style={{ height: `350px` }} />}
/>


        </div>
      
    )
  }


export default Maps;