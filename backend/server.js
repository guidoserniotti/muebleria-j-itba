const express = require('express');
const app = express();
const PORT = 3001;
app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
  });
  
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Error interno del servidor' });
  });
const logger = require('./middlewares/logger');
app.use(logger);
app.use(express.json());
const PORT = 3001; 
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
