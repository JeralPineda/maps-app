export const LoadingPlaces = () => {
  return (
    <div className="alert alert-primary mt-2 text-center">
      <h6>Buscando</h6>
      <p>Espere por favor...</p>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
