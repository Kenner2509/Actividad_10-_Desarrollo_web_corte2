import { useState } from "react";
import videojuegos from "./data/videojuegos.js";
import Buscador from "./components/Buscador.jsx";
import FiltroGenero from "./components/FiltroGenero.jsx";
import TarjetaJuego from "./components/TarjetaJuego.jsx";
import DetalleJuego from "./components/DetalleJuego.jsx";

// Quita tildes y pasa a minúsculas para que "accion" encuentre "Acción".
const normalizar = (texto) =>
  texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

// Géneros únicos tomados de los datos, más la opción "Todos".
const generos = ["Todos", ...new Set(videojuegos.map((j) => j.genero))];

function App() {
  // Estado de la aplicación (useState)
  const [busqueda, setBusqueda] = useState("");
  const [generoActivo, setGeneroActivo] = useState("Todos");
  const [favoritos, setFavoritos] = useState([]); // guarda los id favoritos
  const [soloFavoritos, setSoloFavoritos] = useState(false);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  // Eventos: reciben datos desde componentes hijos mediante props.
  const manejarBusqueda = (evento) => setBusqueda(evento.target.value);

  const alternarFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favId) => favId !== id)); // desmarcar
    } else {
      setFavoritos([...favoritos, id]); // marcar
    }
  };

  // Búsqueda + género + favoritos, todo a la vez, con filter().
  const juegosVisibles = videojuegos.filter((juego) => {
    const coincideNombre = normalizar(juego.nombre).includes(
      normalizar(busqueda.trim())
    );
    const coincideGenero =
      generoActivo === "Todos" || juego.genero === generoActivo;
    const coincideFavorito = !soloFavoritos || favoritos.includes(juego.id);
    return coincideNombre && coincideGenero && coincideFavorito;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setGeneroActivo("Todos");
    setSoloFavoritos(false);
  };

  return (
    <div className="app">
      <header className="cabecera">
        <div>
          <h1>Romsmania</h1>
          <p className="subtitulo">Catálogo de la tienda</p>
        </div>
        <button
          type="button"
          className={`btn-favoritos ${soloFavoritos ? "activo" : ""}`}
          onClick={() => setSoloFavoritos(!soloFavoritos)}
          aria-pressed={soloFavoritos}
        >
          <span aria-hidden="true">{soloFavoritos ? "♥" : "♡"}</span>
          {soloFavoritos ? "Ver todos" : "Ver solo favoritos"}
          <span className="contador" aria-label="cantidad de favoritos">
            {favoritos.length}
          </span>
        </button>
      </header>

      <section className="controles" aria-label="Búsqueda y filtros">
        <Buscador valor={busqueda} onCambio={manejarBusqueda} />
        <FiltroGenero
          generos={generos}
          generoActivo={generoActivo}
          onSeleccionar={setGeneroActivo}
        />
      </section>

      <p className="resumen" aria-live="polite">
        {juegosVisibles.length} de {videojuegos.length} videojuegos
      </p>

      {juegosVisibles.length > 0 ? (
        <main className="cuadricula">
          {juegosVisibles.map((juego) => (
            <TarjetaJuego
              key={juego.id}
              juego={juego}
              esFavorito={favoritos.includes(juego.id)}
              onFavorito={() => alternarFavorito(juego.id)}
              onAbrir={() => setJuegoSeleccionado(juego)}
            />
          ))}
        </main>
      ) : (
        <main className="vacio">
          <p>
            {soloFavoritos && favoritos.length === 0
              ? "Todavía no marcaste favoritos. Toca el corazón de una tarjeta para guardarlo."
              : "No hay videojuegos que coincidan con tu búsqueda."}
          </p>
          <button type="button" className="btn-secundario" onClick={limpiarFiltros}>
            Limpiar filtros
          </button>
        </main>
      )}

      {juegoSeleccionado && (
        <DetalleJuego
          juego={juegoSeleccionado}
          esFavorito={favoritos.includes(juegoSeleccionado.id)}
          onFavorito={() => alternarFavorito(juegoSeleccionado.id)}
          onCerrar={() => setJuegoSeleccionado(null)}
        />
      )}
    </div>
  );
}

export default App;