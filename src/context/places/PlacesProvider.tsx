/* eslint-disable @typescript-eslint/no-floating-promises */
import { useReducer, useEffect } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { getUserLocation } from '../../helpers';
import { searchApi } from '../../api';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export interface Props {
  children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: 'setUserLocation', payload: lngLat })
    );
  }, []);

  const searchPlacesByTerm = async (query: string) => {
    if (query.length === 0) return []; //TODO: Limpiar state
    if (!state.userLocation) throw new Error('No hay ubicación del usuario');

    const resp = await searchApi.get(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(','),
      },
    });

    console.log(resp.data);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return resp.data;
  };

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
