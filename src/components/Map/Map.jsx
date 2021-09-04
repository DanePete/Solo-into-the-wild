import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map(latLng) {
  return (
    <MapContainer center={latLng.latLng} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer
        url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=11ec4ec7b29812e54c0f261032fbce7b`}
      />
      <TileLayer
        url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=11ec4ec7b29812e54c0f261032fbce7b`}
      />
      <Marker position={latLng.latLng}>
        <Popup>
          FOUND YOU! 
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
