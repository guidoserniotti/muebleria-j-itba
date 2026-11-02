# Mueblería Hermanos Jota

E-commerce de muebles con React, Express, MongoDB y Mongoose.

## Requisitos

- Node.js 22 o superior.
- Una base MongoDB accesible desde el backend.

## Configuración local

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