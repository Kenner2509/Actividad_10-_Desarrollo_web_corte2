function TarjetaJuego({ juego, esFavorito, onFavorito, onAbrir }) {
  return (
    <article className="tarjeta">
      {/* Abre el detalle */}
      <button type="button" className="tarjeta-abrir" onClick={onAbrir}>
        <img src={juego.imagen} alt={`Portada de ${juego.nombre}`} loading="lazy" />
        <div className="tarjeta-info">
          <h2>{juego.nombre}</h2>
          <p>
            <span className="etiqueta">{juego.genero}</span>
            <span className="anio">{juego.anio}</span>
          </p>
        </div>
      </button>

      {/* Botón aparte para no anidar botones dentro de botones */}
      <button
        type="button"
        className={`corazon ${esFavorito ? "activo" : ""}`}
        onClick={onFavorito}
        aria-pressed={esFavorito}
        aria-label={
          esFavorito
            ? `Quitar ${juego.nombre} de favoritos`
            : `Agregar ${juego.nombre} a favoritos`
        }
      >
        {esFavorito ? "♥" : "♡"}
      </button>
    </article>
  );
}

export default TarjetaJuego;
