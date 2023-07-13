import { useRef, ChangeEvent } from 'react';

export const SearchBar = () => {
  const debounceRef = useRef<number | null>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      //TODO: Buscar consulta
      console.log('debounced value', event.target.value);
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
