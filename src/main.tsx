/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp.tsx';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoiamVyYWxwaW5lZGEiLCJhIjoiY2xrMWJ2M2FsMDFyMDNycnJwaTZwdzlnNCJ9.eUGO0YUw8Z-v9RTVSONPPw';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
