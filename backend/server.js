const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(logger);
app.use(express.json());

// Aquí deben registrarse las rutas de la aplicación.

app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
