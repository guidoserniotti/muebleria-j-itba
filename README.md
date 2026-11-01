# Mueblería Hermanos J

Proyecto fullstack desarrollado para el curso de ITBA. Hermanos J es una
mueblería online que presenta un catálogo de muebles para distintos ambientes
del hogar y ofrece una base para consultar productos, ver su detalle,
contactar al negocio y gestionar un carrito de compras.

## Equipo

Integrantes identificados a partir de los autores y ramas del repositorio:

- Abigail Chamorro
- Guido Serniotti
- Julieta Severiche
- Francisco Mereles
- Santiago Noguera

## Tecnologías

- **Frontend:** React 19, JavaScript, Vite 8 y CSS.
- **Backend:** Node.js, Express 5 y CommonJS.
- **Comunicación:** CORS y API REST en JSON.
- **Calidad y desarrollo:** ESLint y Nodemon.

## Funcionalidades

- Catálogo de productos organizado por categorías como Living, Comedor,
  Dormitorio y Oficina.
- Datos de productos con nombre, precio, descripción, imagen, stock y estado
  destacado.
- Tarjetas de producto con imagen y precio localizado para Argentina.
- Vista de detalle de producto con opción de añadir al carrito y confirmación
  visual de la acción.
- Barra de navegación con enlaces a Inicio, Catálogo y Contacto.
- Formulario de contacto con validación de nombre, email y mensaje, además de
  estados de error y confirmación de envío.
- Middleware de logging de solicitudes con fecha, método y URL.
- Manejo de rutas inexistentes y errores internos en el backend.

## API

El backend prepara las siguientes rutas de productos:

| Método | Ruta             | Descripción                                   |
| ------ | ---------------- | --------------------------------------------- |
| `GET`  | `/api/productos`     | Devuelve el catálogo completo.                |
| `GET`  | `/api/productos/:id` | Devuelve un producto por ID o un error `404`. |

La fuente de datos es `backend/data/productos.js` (array de objetos en un
archivo local), tal como pide la consigna; no hay base de datos. El router se
monta en `backend/server.js` con `app.use("/api/productos", productosRouter)`,
antes del manejador de 404.

## Estructura

```text
.
├── backend/
│   ├── data/productos.js       # Catálogo inicial
│   ├── middlewares/logger.js   # Registro de solicitudes
│   ├── routes/productos.js     # Endpoints de productos
│   └── server.js               # Servidor Express
└── client/
		├── public/img/products/    # Imágenes del catálogo
		└── src/
				├── components/         # Navbar, footer, tarjetas, detalle y contacto
				├── styles/             # Estilos globales
				├── App.jsx             # Composición principal
				└── main.jsx            # Punto de entrada React
```

## Instalación y ejecución

Se necesitan Node.js y npm.

### Backend

```bash
cd backend
npm install
npm run dev
```

El servidor queda disponible en `http://localhost:3001`.

Para ejecutarlo sin Nodemon:

```bash
npm start
```

### Frontend

En otra terminal:

```bash
cd client
npm install
npm run dev
```

Vite mostrará la URL local del cliente, normalmente
`http://localhost:5173`.

Otros comandos disponibles desde `client/`:

```bash
npm run build   # Genera la versión de producción
npm run preview # Sirve la build localmente
npm run lint    # Ejecuta ESLint
```

## Decisiones tomadas

- **Vite en lugar de create-react-app.** El cliente se reconstruyó sobre Vite
  porque `create-react-app` está discontinuado. La arquitectura de componentes,
  `useState`, props y el ciclo de vida del `fetch` son idénticos.
- **Estado global en `App.jsx`.** El carrito, la vista activa y el producto
  seleccionado viven en `App.jsx` y bajan por props. `Navbar` recibe
  `cartCount`; `ProductList` recibe `onVerDetalle`.
- **Renderizado condicional por vista.** `App.jsx` alterna entre listado,
  detalle y contacto con una variable de estado `vista`.
- **El fetch vive en `ProductList`.** El componente maneja sus tres estados
  (carga, error, éxito) y recién entonces mapea con `.map()` usando `id` como
  key.

## Alcance actual

El envío del formulario de contacto es solo de cliente: valida y confirma, pero
no impacta en el backend. No hay persistencia, checkout ni autenticación.
