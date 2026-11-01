import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.js';
import connectDB from './db.js';
import productosRouter from './routes/productos.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares globales
app.use(cors());
app.use(logger);
app.use(express.json());

// Rutas de la API
app.use('/api/productos', productosRouter);

// Ruta no encontrada (404)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejador de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Primero se conecta a la base y recién después se acepta tráfico
await connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});