// Campo de texto controlado: su valor vive en el estado de App.
function Buscador({ valor, onCambio }) {
  return (
    <div className="buscador">
      <label htmlFor="buscar">Buscar por nombre</label>
      <input
        id="buscar"
        type="search"
        placeholder="Ej: Zelda, Civilization…"
        value={valor}
        onChange={onCambio}
      />
    </div>
  );
}

export default Buscador;
