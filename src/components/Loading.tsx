export const Loading = () => {
  return (
    <div className="loading-map d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h1>Espere por favor</h1>
        <p>Localizando...</p>
      </div>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
