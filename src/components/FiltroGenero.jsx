// Muestra un botón por género; el activo se marca visualmente.
function FiltroGenero({ generos, generoActivo, onSeleccionar }) {
  return (
    <div className="generos" role="group" aria-label="Filtrar por género">
      {generos.map((genero) => (
        <button
          key={genero}
          type="button"
          className={`chip ${genero === generoActivo ? "activo" : ""}`}
          aria-pressed={genero === generoActivo}
          onClick={() => onSeleccionar(genero)}
        >
          {genero}
        </button>
      ))}
    </div>
  );
}

export default FiltroGenero;
