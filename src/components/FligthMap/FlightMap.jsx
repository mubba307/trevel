'use client';

import React from 'react';
import Tilt from 'react-parallax-tilt';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix marker icon issues in Leaflet for React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

export default function FlightMap() {
  const positions = {
    tokyo: [35.6586, 139.7454],
    paris: [48.8566, 2.3522],
  };

  const flightPath = [positions.tokyo, positions.paris];

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15}
      scale={1.05}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      transitionSpeed={1000}
      className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl overflow-hidden"
      style={{
        height: '400px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
        willChange: 'transform',
      }}
      glareColor="white"
    >
      <MapContainer
        center={[42, 70]}
        zoom={3}
        scrollWheelZoom={false}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '1rem',
          boxShadow: 'inset 0 0 20px rgba(255, 165, 0, 0.2)',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={positions.tokyo}>
          <Popup>Tokyo Tower</Popup>
        </Marker>

        <Marker position={positions.paris}>
          <Popup>Paris</Popup>
        </Marker>

        <Polyline
          positions={flightPath}
          color="orange"
          weight={4}
          dashArray="15"
          dashOffset="0"
          // You could add animation by manipulating dashOffset in a custom hook or with CSS animations if you want
        />
      </MapContainer>
    </Tilt>
  );
}
