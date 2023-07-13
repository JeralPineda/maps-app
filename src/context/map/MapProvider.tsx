import { useReducer, useContext, useEffect } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';

import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { PlacesContext } from '..';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

const INITIAL_STATE: MapState = {
  isMapReady: false,
  map: undefined,
  markers: [],
};

export interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
  const { places } = useContext(PlacesContext);

  useEffect(() => {
    state.markers.forEach((marker) => marker.remove()); //limpiar marcadores viejos
    const newMarkers: Marker[] = [];

    for (const place of places) {
      const [lng, lat] = place.center;
      const popup = new Popup().setHTML(`
                    <h6>${place.text_es}</h6>
                    <p>${place.place_name_es}</p>
                `);

      const newMarker = new Marker()
        .setPopup(popup)
        .setLngLat([lng, lat])
        .addTo(state.map!);

      newMarkers.push(newMarker);
    }

    // Todo: limpiar polyline

    dispatch({ type: 'setMarkers', payload: newMarkers });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [places]);

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup().setHTML(`
    <h4>Aqui estoy</h4>
    <p>En algún lugar</p>
    `);
    new Marker()
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: 'setMap', payload: map });
  };

  return (
    <MapContext.Provider
      value={{
        ...state,
        //* Métodos
        setMap,
        // getRouteBetweenPoints,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
