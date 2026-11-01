import mongoose from 'mongoose';

async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('Falta la variable MONGO_URI en el archivo .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log(`MongoDB conectado (base: ${mongoose.connection.name})`);
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error.message);
    process.exit(1);
  }
}

export default connectDB;