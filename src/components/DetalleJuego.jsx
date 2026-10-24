// Modal con la descripción y los datos principales.
function DetalleJuego({ juego, esFavorito, onFavorito, onCerrar }) {
  return (
    <div className="fondo-modal" onClick={onCerrar}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-detalle"
        // Evita que un clic dentro del modal lo cierre.
        onClick={(evento) => evento.stopPropagation()}
      >
        <img src={juego.imagen} alt={`Portada de ${juego.nombre}`} />
        <div className="modal-contenido">
          <h2 id="titulo-detalle">{juego.nombre}</h2>
          <p className="descripcion">{juego.descripcion}</p>

          <dl className="datos">
            <div>
              <dt>Género</dt>
              <dd>{juego.genero}</dd>
            </div>
            <div>
              <dt>Año</dt>
              <dd>{juego.anio}</dd>
            </div>
            <div>
              <dt>Desarrollador</dt>
              <dd>{juego.desarrollador}</dd>
            </div>
            <div>
              <dt>Plataformas</dt>
              <dd>{juego.plataformas}</dd>
            </div>
          </dl>

          <div className="acciones">
            <button
              type="button"
              className={`btn-favoritos ${esFavorito ? "activo" : ""}`}
              onClick={onFavorito}
              aria-pressed={esFavorito}
            >
              <span aria-hidden="true">{esFavorito ? "♥" : "♡"}</span>
              {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
            </button>
            <button type="button" className="btn-secundario" onClick={onCerrar}>
              Cerrar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetalleJuego;
