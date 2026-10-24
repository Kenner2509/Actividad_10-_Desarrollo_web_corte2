// Datos iniciales: un array de objetos (no hay backend ni API).
const videojuegos = [
  {
    id: 1,
    nombre: "Elden Ring",
    genero: "Acción",
    anio: 2022,
    imagen: "/img/Elden_Ring.jpg",
    plataformas: "PC, PlayStation, Xbox",
    desarrollador: "FromSoftware",
    descripcion:
      "Un mundo abierto lleno de peligros y secretos. Explora las Tierras Intermedias, enfrenta jefes colosales y construye tu personaje a tu manera.",
  },
  {
    id: 2,
    nombre: "God of War",
    genero: "Acción",
    anio: 2018,
    imagen: "/img/God_of_War.jpg",
    plataformas: "PC, PlayStation",
    desarrollador: "Santa Monica Studio",
    descripcion:
      "Kratos y su hijo Atreus viajan por los reinos nórdicos en una historia de combate cuerpo a cuerpo y relación entre padre e hijo.",
  },
  {
    id: 3,
    nombre: "DOOM Eternal",
    genero: "Acción",
    anio: 2020,
    imagen: "/img/Doom_Eternal.jpg",
    plataformas: "PC, PlayStation, Xbox, Switch",
    desarrollador: "id Software",
    descripcion:
      "Disparos frenéticos y movimiento veloz contra hordas de demonios. Hay que atacar sin parar para conseguir salud y munición.",
  },
  {
    id: 4,
    nombre: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura",
    anio: 2017,
    imagen: "/img/Zelda.jpg",
    plataformas: "Nintendo Switch, Wii U",
    desarrollador: "Nintendo",
    descripcion:
      "Despierta en un reino en ruinas y recorre Hyrule con total libertad. Escala, cocina, resuelve santuarios y enfrenta a Ganon.",
  },
  {
    id: 5,
    nombre: "Hollow Knight",
    genero: "Aventura",
    anio: 2017,
    imagen: "/img/Hollow_Knight.jpg",
    plataformas: "PC, Switch, PlayStation, Xbox",
    desarrollador: "Team Cherry",
    descripcion:
      "Desciende a Hallownest, un reino subterráneo de insectos. Exploración en 2D, combates exigentes y un mapa que se descubre poco a poco.",
  },
  {
    id: 6,
    nombre: "Red Dead Redemption 2",
    genero: "Aventura",
    anio: 2018,
    imagen: "/img/Red_Dead_2.jpg",
    plataformas: "PC, PlayStation, Xbox",
    desarrollador: "Rockstar Games",
    descripcion:
      "Acompaña a Arthur Morgan y su banda en el ocaso del Lejano Oeste. Una historia larga con caza, duelos y decisiones morales.",
  },
  {
    id: 7,
    nombre: "Rocket League",
    genero: "Deportes",
    anio: 2015,
    imagen: "/img/Rocket_League.jpg",
    plataformas: "PC, PlayStation, Xbox, Switch",
    desarrollador: "Psyonix",
    descripcion:
      "Fútbol con autos propulsados por cohetes. Partidos de 3 contra 3 rápidos, con saltos, acrobacias y mucho trabajo en equipo.",
  },
  {
    id: 8,
    nombre: "Efootball",
    genero: "Deportes",
    anio: 2026,
    imagen: "/img/PES.jpg",
    plataformas: "PlayStation 5, PlayStation 4, Xbox Series X|S, Xbox One, PC, iOS y Android.",
    desarrollador: "KONAMI",
    descripcion:
      "simulador de fútbol gratuito desarrollado por Konami, sucesor de la mítica saga Pro Evolution Soccer (PES), que funciona bajo un modelo de servicio (free-to-play) con micropagos",
  },
  {
    id: 9,
    nombre: "League of Legends",
    genero: "Estrategia",
    anio: 2009,
    imagen: "/img/LOL.jpg",
    plataformas: "PC",
    desarrollador: "Riot Games",
    descripcion:
      "videojuego multijugador de arena de batalla en línea gratuito.",
  },
  {
    id: 10,
    nombre: "Age of Empires II: Definitive Edition",
    genero: "Estrategia",
    anio: 2019,
    imagen: "/img/AOE.jpg",
    plataformas: "PC, Xbox",
    desarrollador: "Forgotten Empires",
    descripcion:
      "Estrategia en tiempo real ambientada en la Edad Media. Recolecta recursos, construye tu base y lidera ejércitos de distintas civilizaciones.",
  },
  {
    id: 11,
    nombre: "StarCraft II",
    genero: "Estrategia",
    anio: 2010,
    imagen: "/img/STAR.jpg",
    plataformas: "PC",
    desarrollador: "Blizzard Entertainment",
    descripcion:
      "Tres razas, terran, zerg y protoss, se enfrentan en batallas en tiempo real. Referente de los esports por su exigencia estratégica.",
  },
];

export default videojuegos;
