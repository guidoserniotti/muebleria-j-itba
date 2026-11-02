import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.js';
import connectDB from './db.js';
import productosRouter from './routes/productos.js';
import categoriasRouter from './routes/categorias.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares globales
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(logger);
app.use(express.json());

// Rutas de la API
app.use('/api/productos', productosRouter);
app.use('/api/categorias', categoriasRouter);

// Ruta no encontrada (404)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Manejador de errores centralizado
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const mensaje = Object.values(err.errors)[0]?.message || 'Datos inválidos';
    return res.status(400).json({ error: mensaje });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Id inválido' });
  }

  if (err.code === 11000) {
    return res.status(409).json({ error: 'Ya existe un registro con ese valor' });
  }

  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Primero se conecta a la base y recién después se acepta tráfico
await connectDB();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});