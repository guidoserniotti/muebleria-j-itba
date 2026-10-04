const express = require('express');
const app = express();
const productosRouter = require('./routes/productos'); 
const PORT = 3001;
app.use('/api/productos', productosRouter); 
app.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});