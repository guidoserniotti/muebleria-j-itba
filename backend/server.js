const express = require('express');
const app = express();
const logger = require('./middlewares/logger');
app.use(logger);
app.use(express.json());
const PORT = 3001; 
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
