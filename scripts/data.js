/* ===================================
   DATA.JS
   Catálogo de productos (mock) y funciones
   asíncronas simuladas para consultarlo.
   Script clásico (sin type="module") para evitar
   bloqueos de CORS al abrir el HTML directo.
   =================================== */

const CATALOGO = [
  {
    id: 1,
    nombre: "Sofá Patagonia",
    precio: 1250000,
    categoria: "Living",
    imagen: "img/products/sofa-patagonia.png",
    descripcion:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    stock: 6,
    destacado: true,
  },
  {
    id: 2,
    nombre: "Sillón Copacabana",
    precio: 480000,
    categoria: "Living",
    imagen: "img/products/sillon-copacabana.png",
    descripcion:
      "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    stock: 8,
    destacado: true,
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    precio: 320000,
    categoria: "Living",
    imagen: "img/products/butaca-mendoza.png",
    descripcion:
      "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    stock: 10,
    destacado: false,
  },
  {
    id: 4,
    nombre: "Mesa de Centro Araucaria",
    precio: 410000,
    categoria: "Living",
    imagen: "img/products/mesa-centro-araucaria.png",
    descripcion:
      "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    stock: 5,
    destacado: true,
  },
  {
    id: 5,
    nombre: "Biblioteca Recoleta",
    precio: 390000,
    categoria: "Living",
    imagen: "img/products/biblioteca-recoleta.png",
    descripcion:
      "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    stock: 7,
    destacado: false,
  },
  {
    id: 6,
    nombre: "Mesa Comedor Pampa",
    precio: 890000,
    categoria: "Comedor",
    imagen: "img/products/mesa-comedor-pampa.png",
    descripcion:
      "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    stock: 4,
    destacado: true,
  },
  {
    id: 7,
    nombre: "Sillas Córdoba",
    precio: 260000,
    categoria: "Comedor",
    imagen: "img/products/sillas-cordoba.png",
    descripcion:
      "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    stock: 12,
    destacado: false,
  },
  {
    id: 8,
    nombre: "Aparador Uspallata",
    precio: 720000,
    categoria: "Comedor",
    imagen: "img/products/aparador-uspallata.png",
    descripcion:
      "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    stock: 3,
    destacado: false,
  },
  {
    id: 9,
    nombre: "Mesa de Noche Aconcagua",
    precio: 175000,
    categoria: "Dormitorio",
    imagen: "img/products/mesa-noche-aconcagua.png",
    descripcion:
      "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    stock: 9,
    destacado: false,
  },
  {
    id: 10,
    nombre: "Escritorio Costa",
    precio: 340000,
    categoria: "Oficina",
    imagen: "img/products/escritorio-costa.png",
    descripcion:
      "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    stock: 6,
    destacado: true,
  },
  {
    id: 11,
    nombre: "Silla de Trabajo Belgrano",
    precio: 295000,
    categoria: "Oficina",
    imagen: "img/products/silla-trabajo-belgrano.png",
    descripcion:
      "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    stock: 8,
    destacado: false,
  },
];

/**
 * Simula una petición asíncrona al servidor y devuelve el catálogo completo.
 * @returns {Promise<Array<Object>>} el array completo de productos.
 */
function obtenerCatalogo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CATALOGO);
    }, 300);
  });
}

/**
 * Simula una petición asíncrona al servidor y busca un producto por id.
 * @param {number|string} id - id del producto a buscar.
 * @returns {Promise<Object|undefined>} el producto encontrado, o undefined si no existe.
 */
function obtenerProductoPorId(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const idNumerico = Number(id);
      const producto = CATALOGO.find((p) => p.id === idNumerico);
      resolve(producto);
    }, 300);
  });
}
