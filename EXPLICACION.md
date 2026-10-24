# Cómo se usan componentes, props, estado y eventos

## Componentes
La interfaz se divide en piezas pequeñas, cada una una función que devuelve JSX:

| Componente | Responsabilidad |
|---|---|
| `App` | Guarda el estado y decide qué juegos se muestran |
| `Buscador` | Campo de texto para el nombre |
| `FiltroGenero` | Botones de género |
| `TarjetaJuego` | Una tarjeta del catálogo |
| `DetalleJuego` | Modal con la descripción y los datos |

## Estado (`useState`)
Todo el estado está en `App`, el componente padre:

```jsx
const [busqueda, setBusqueda] = useState("");            // texto escrito
const [generoActivo, setGeneroActivo] = useState("Todos"); // género elegido
const [favoritos, setFavoritos] = useState([]);          // ids favoritos
const [soloFavoritos, setSoloFavoritos] = useState(false); // ver solo favoritos
const [juegoSeleccionado, setJuegoSeleccionado] = useState(null); // detalle abierto
```

Cuando una de estas variables cambia, React vuelve a dibujar la pantalla con los datos nuevos. Los valores derivados, como la lista de juegos visibles o la cantidad de favoritos (`favoritos.length`), se calculan en cada render y no se guardan aparte.

## Props
Las props pasan datos y funciones del padre a los hijos:

- **Datos hacia abajo:** `App` le pasa a cada `TarjetaJuego` el objeto `juego` y si es favorito (`esFavorito`).
- **Funciones hacia arriba:** `App` también pasa funciones (`onFavorito`, `onAbrir`, `onCambio`, `onSeleccionar`). El hijo las ejecuta cuando ocurre algo y así le avisa al padre para que actualice el estado.

```jsx
<TarjetaJuego
  key={juego.id}
  juego={juego}
  esFavorito={favoritos.includes(juego.id)}
  onFavorito={() => alternarFavorito(juego.id)}
  onAbrir={() => setJuegoSeleccionado(juego)}
/>
```

## Eventos
- **`onChange`** en el `<input>` del `Buscador`: cada tecla llama a `setBusqueda`, así los resultados se actualizan mientras se escribe.
- **`onClick`** en los botones de género (`setGeneroActivo`), en el corazón (`alternarFavorito`), en "Ver solo favoritos" (`setSoloFavoritos`), en la tarjeta (`setJuegoSeleccionado`) y en "Cerrar" del modal.
- **`filter()`** crea la lista de juegos visibles. Un juego pasa solo si cumple las tres condiciones a la vez: el nombre contiene el texto buscado, el género coincide (o está "Todos") y, si corresponde, es favorito.
- **`filter()`** también se usa para quitar un id de `favoritos` al desmarcar.
- **`map()`** recorre los juegos visibles y crea una `TarjetaJuego` por cada uno (con `key={juego.id}`). Otro `map()` genera los botones de género.