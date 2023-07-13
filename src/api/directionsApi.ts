import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoiamVyYWxwaW5lZGEiLCJhIjoiY2xrMWJ2M2FsMDFyMDNycnJwaTZwdzlnNCJ9.eUGO0YUw8Z-v9RTVSONPPw',
  },
});

export default directionsApi;
