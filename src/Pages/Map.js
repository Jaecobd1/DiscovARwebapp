import React, { useState, useEffect, Component} from "react";
import ReactMapGL, {Marker, Popup, UserLocation} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';
import { useMoralis, useNewMoralisObject } from "react-moralis";
import Dar from "../Dar.png";

import './Map.css';
// import {useDispatchMap} from "./hooks/mapHook.jsx";

// import MapboxGL from "@react-native-mapbox-gl/maps";

const div = styled.div`
z-index:0;
`


// const PlaceNft = ({ lat, lng, user}) => {
//   const { isSaving, error, save } = useNewMoralisObject('NftAndLocation');
//   const Moralis = require('moralis');
//   // const GeoPoint = useMoralis.GeoPoint;
//   return(
//     <div>
//       {/* {error && <ErrorMessage error={error} />} */}
//       <button onClick={() => save({lat, lng, user})} disabled={isSaving}>Place NFT</button>
//       {/* <div>
//         {/* {GeoPoint} */}
//       {/* </div> */} 
//     </div>
//   )
// }


// const NftLocation = ({GeoPoint, user}) => {
//   const Moralis = require('moralis');

//   return(
//     <button onClick={() => save({GeoPoint, user})} disabled={isSaving}>Place NFT</button>
//   )

// }




export const Map = () => {

const [loading, setLoading] = useState(false);

// const mapDispatch = useDispatchMap();

//location.coordinates.latitude
//const lat = location.coordinates.lat;
//const lng = location.coordinates.lng;

  let [viewport , setViewport] = useState({
    latitude: 41.079273,
    longitude: -85.139351,
    zoom: 12,
    width : (window.innerWidth),
    height: (window.innerHeight/2),
    pitch: 60
  });

const { setUserData, user } = useMoralis();

return (

<div className="Map">
    <ReactMapGL 
    mapStyle={'mapbox://styles/mapbox/dark-v9'}
    mapboxApiAccessToken={
      "pk.eyJ1IjoiZGFyMyIsImEiOiJja3Y5MnE1cDA5emRpMnFxamR6cTVrYmI4In0.bjwZvfaD_nR9QobLZtjFaw"
    }
      {...viewport} 
    onViewportChange={(newView) => setViewport (newView)}
    // onClick={x => {
    //   x.srcEvent.which === 1 && 
    //   mapDispatch ({ type: 'ADD_MARKER',
    //   payload: {marker: x.lngLat}});
    // }}
    >
     {/* <MapboxGl.UserLocation/>  */}
       <Marker latitude={41.00} longitude={-85.00}>
          <div>Marker</div>
      </Marker> 
    <img src={Dar} height="10vh"/>
    </ReactMapGL>
    <div className="Place">
      Longitude: {viewport.longitude} | latitude: {viewport.latitude}
    </div>
    <button align="center"
      onClick={() => setUserData({
        nft: "placeholder",
        lat: viewport.latitude, 
        lng: viewport.longitude,
        user: user
      })}>
      Place NFT
    </button>
    
    {/* <PlaceNft /> */}
    </div>
);
}

export default Map;