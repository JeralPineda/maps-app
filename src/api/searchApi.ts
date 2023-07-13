import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoiamVyYWxwaW5lZGEiLCJhIjoiY2xrMWJ2M2FsMDFyMDNycnJwaTZwdzlnNCJ9.eUGO0YUw8Z-v9RTVSONPPw',
  },
});

export default searchApi;
