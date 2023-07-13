import { useRef, ChangeEvent, useContext } from 'react';
import { PlacesContext } from '../context';

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);
  const debounceRef = useRef<number | null>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      searchPlacesByTerm(event.target.value);
    }, 350);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar..."
        onChange={onQueryChanged}
      />
    </div>
  );
};
