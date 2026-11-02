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
| `GET`  | `/productos`     | Devuelve el catálogo completo.                |
| `GET`  | `/productos/:id` | Devuelve un producto por ID o un error `404`. |

La fuente actual de datos es `backend/data/productos.js`; no hay base de
datos ni persistencia configurada todavía. La integración de la ruta de
productos en `backend/server.js` y el renderizado completo desde `App.jsx`
forman parte del trabajo en curso.

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
cp .env.example .env
npm install
npm run seed
npm run dev
```

Variables requeridas en `backend/.env`:

```env
MONGO_URI=<cadena_de_conexion>
PORT=3001
CLIENT_URL=http://localhost:5173
```

### Frontend

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

Variable requerida en `client/.env`:

```env
VITE_API_URL=http://localhost:3001
```

El frontend queda disponible normalmente en `http://localhost:5173`.

## Rutas principales

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/productos` | Lista los productos |
| GET | `/api/productos/:id` | Obtiene un producto por `_id` |
| POST | `/api/productos` | Crea un producto |
| PUT | `/api/productos/:id` | Actualiza un producto |
| DELETE | `/api/productos/:id` | Elimina un producto |

### Cómo probar los endpoints

Todas las pruebas pueden realizarse desde el navegador usando los deploys
publicados, sin utilizar la consola.

#### GET: listar productos

1. Abrir el [catálogo en Vercel](https://muebleria-j-itba.vercel.app/productos).
2. Verificar que se muestren los productos de la base de datos.

Resultado esperado: el catálogo carga correctamente los productos obtenidos
desde `GET /api/productos`, incluyendo nombre, precio, stock e imagen.

#### GET: obtener un producto por ID

1. Desde el catálogo, seleccionar cualquier producto.
2. Verificar que se abra `/productos/:id` y se muestre su detalle.
3. Esta pantalla prueba el endpoint `GET /api/productos/:id`.

Resultado esperado: se muestra el producto correspondiente. Si no existe,
la aplicación muestra el mensaje de producto no encontrado.

#### POST: crear un producto

1. Abrir [Crear producto](https://muebleria-j-itba.vercel.app/admin/crear-producto).
2. Completar nombre, descripción, precio, stock e imagen.
3. Presionar **Crear producto**.
4. Verificar el mensaje de confirmación y que el producto aparezca en el
   catálogo.

Resultado esperado: el formulario prueba `POST /api/productos`, crea el
producto y redirige al catálogo.

Para probar validaciones, dejar el nombre vacío o ingresar un precio o stock
negativo. El formulario debe mostrar un error y no enviar la solicitud.

#### PUT: actualizar un producto

1. Abrir el [catálogo publicado](https://muebleria-j-itba.vercel.app/productos).
2. Entrar al detalle de un producto.
3. Presionar **Editar**.
4. Modificar uno o más campos y presionar **Guardar cambios**.
5. Verificar el mensaje de confirmación y los datos actualizados.

Resultado esperado: el formulario prueba `PUT /api/productos/:id` y redirige
al detalle actualizado. Un precio negativo debe ser rechazado.

#### DELETE: eliminar un producto

1. Crear primero un producto de prueba desde [Crear
   producto](https://muebleria-j-itba.vercel.app/admin/crear-producto), para no
   eliminar un producto real.
2. Abrir el detalle del producto creado.
3. Presionar **Eliminar** y confirmar.
4. Verificar que el producto ya no aparezca en el catálogo.

Resultado esperado: se prueba `DELETE /api/productos/:id`, se muestra la
confirmación y el producto deja de estar disponible.

#### Flujo completo recomendado

1. Abrir el [catálogo publicado](https://muebleria-j-itba.vercel.app/productos).
2. Crear un producto desde el [formulario de
   alta](https://muebleria-j-itba.vercel.app/admin/crear-producto).
3. Abrir su detalle y comprobar sus datos.
4. Editarlo desde el botón **Editar**.
5. Eliminarlo desde el botón **Eliminar**.
6. Volver al catálogo y verificar que ya no aparezca.

## Rutas del frontend

- `/`
- `/productos`
- `/productos/:id`
- `/contacto`
- `/admin/crear-producto`
- `/admin/editar-producto/:id`

## Validación

```bash
cd backend
npm test

cd ../client
npm run lint
npm run build
```

## Deploy

El backend puede desplegarse en Render usando `backend` como raíz y
`npm start` como comando de inicio. Configurar `MONGO_URI`, `PORT` y
`CLIENT_URL` como variables del servicio.

El frontend puede desplegarse en Vercel o Netlify usando `client` como raíz.
Configurar `VITE_API_URL` con la URL pública del backend y conservar la regla
de reescritura SPA de `client/vercel.json` para que las rutas de React Router
funcionen al recargar la página.

No se deben versionar los archivos `.env`; los valores sensibles se configuran
en cada entorno de ejecución.
