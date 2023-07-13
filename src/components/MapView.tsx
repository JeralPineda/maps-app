import { useContext, useLayoutEffect, useRef } from 'react';
import { Map } from 'mapbox-gl';

import { PlacesContext } from '../context';
import { Loading } from '.';

export const MapView = () => {
  const mapDiv = useRef<HTMLDivElement>(null);
  const { isLoading, userLocation } = useContext(PlacesContext);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        right: 0,
      }}
    >
      {userLocation?.join(',')}
    </div>
  );
};