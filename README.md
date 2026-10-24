# Romsmania: catálogo de videojuegos

Página hecha con **React** (componentes funcionales, JSX y `useState`) para que los usuarios de una tienda exploren un catálogo, busquen por nombre, filtren por género, marquen favoritos y vean el detalle de cada juego. No usa backend ni API: los datos están en `src/data/videojuegos.js`.

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior (incluye `npm`)

## Cómo ejecutarlo

```bash
# 1. Entrar a la carpeta del proyecto
cd catalogo-videojuegos

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abra en el navegador la dirección que aparece en la terminal (normalmente http://localhost:5173).

## Funcionalidades

- 11 videojuegos en tarjetas, cada uno con nombre, imagen, género y año.
- Búsqueda por nombre que se actualiza mientras escribes (ignora mayúsculas y tildes).
- Filtro por género (Acción, Aventura, Deportes, Estrategia). Funciona a la vez que la búsqueda.
- Botón de corazón para marcar o desmarcar favoritos, contador de favoritos y botón para ver solo los favoritos.
- Al hacer clic en una tarjeta se abre un modal con la descripción y los datos principales.
