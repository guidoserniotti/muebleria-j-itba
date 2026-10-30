const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGO_URI;

  // Si falta la variable, no tiene sentido seguir
  if (!uri) {
    console.error('Falta la variable MONGO_URI en el archivo .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log(`MongoDB conectado (base: ${mongoose.connection.name})`);
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1); // sin base de datos, el servidor no debe arrancar
  }
}

module.exports = connectDB;