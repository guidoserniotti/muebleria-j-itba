// Catálogo de productos
const catalogo = [
  {
    id: 1,
    nombre: "Silla de comedor",
    precio: 150,
    categoria: "sillas",
    imagen: "https://placehold.co/400x300?text=Silla+Comedor",
    descripcion:
      "Silla de comedor cómoda y resistente, perfecta para tu hogar.",
    stock: 10,
    destacado: true,
  },
  {
    id: 2,
    nombre: "Mesa de centro",
    precio: 250,
    categoria: "mesas",
    imagen: "https://placehold.co/400x300?text=Mesa+Centro",
    descripcion: "Mesa de centro elegante para tu sala de estar.",
    stock: 5,
    destacado: true,
  },
  {
    id: 3,
    nombre: "Sofá de 3 cuerpos",
    precio: 800,
    categoria: "sofás",
    imagen: "https://placehold.co/400x300?text=Sofa+3+Cuerpos",
    descripcion: "Sofá confortable de 3 cuerpos en color gris.",
    stock: 3,
    destacado: true,
  },
  {
    id: 4,
    nombre: "Estantería moderna",
    precio: 180,
    categoria: "estanterías",
    imagen: "https://placehold.co/400x300?text=Estanteria",
    descripcion: "Estantería de madera con diseño moderno y funcional.",
    stock: 8,
    destacado: false,
  },
  {
    id: 5,
    nombre: "Cama doble",
    precio: 600,
    categoria: "camas",
    imagen: "https://placehold.co/400x300?text=Cama+Doble",
    descripcion: "Cama doble con marco de madera maciza y colchón incluido.",
    stock: 4,
    destacado: true,
  },
  {
    id: 6,
    nombre: "Cajonera con espejo",
    precio: 220,
    categoria: "muebles",
    imagen: "https://placehold.co/400x300?text=Cajonera",
    descripcion: "Cajonera con 5 cajones y espejo incorporado.",
    stock: 6,
    destacado: false,
  },
  {
    id: 7,
    nombre: "Escritorio de oficina",
    precio: 320,
    categoria: "escritorios",
    imagen: "https://placehold.co/400x300?text=Escritorio",
    descripcion: "Escritorio ergonómico para tu oficina o trabajo desde casa.",
    stock: 7,
    destacado: false,
  },
  {
    id: 8,
    nombre: "Sillón reclinable",
    precio: 450,
    categoria: "sillones",
    imagen: "https://placehold.co/400x300?text=Sillon",
    descripcion: "Sillón reclinable de cuero con mecanismo de oscilación.",
    stock: 5,
    destacado: true,
  },
  {
    id: 9,
    nombre: "Puertas corredizas",
    precio: 500,
    categoria: "puertas",
    imagen: "https://placehold.co/400x300?text=Puertas",
    descripcion: "Puertas corredizas de vidrio templado con marco de aluminio.",
    stock: 2,
    destacado: false,
  },
  {
    id: 10,
    nombre: "Lámpara de pie",
    precio: 85,
    categoria: "iluminación",
    imagen: "https://placehold.co/400x300?text=Lampara",
    descripcion: "Lámpara de pie moderna con brazo articulado ajustable.",
    stock: 12,
    destacado: false,
  },
];

// Función asíncrona simulada para obtener el catálogo completo
async function obtenerCatalogo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(catalogo);
    }, 300);
  });
}

// Función asíncrona simulada para obtener un producto por ID
async function obtenerProductoPorId(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = catalogo.find((p) => p.id == id);
      resolve(producto);
    }, 300);
  });
}
