import mongoose from 'mongoose';

const MONGODB_URI = process.env['MONGODB_URI'] || 'mongodb://localhost:27017/twm2026';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB conectado correctamente');

    mongoose.connection.on('error', (err) => {
      console.error('❌ Error de MongoDB:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️  MongoDB desconectado');
    });

  } catch (error) {
    console.error('❌ Error al conectar MongoDB:', error);
    process.exit(1);
  }
};

export default mongoose;