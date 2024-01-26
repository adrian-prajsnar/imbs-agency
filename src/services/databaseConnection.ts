import mongoose from 'mongoose';

type Connection = {
  isConnected?: number;
};

const mongoDbUrl: string | undefined = process.env.MONGO_DB;
const connection: Connection = {};

export async function connectToDb() {
  try {
    if (connection.isConnected) return;
    if (!mongoDbUrl) throw new Error('MongoDB connection string is undefined.');
    const db = await mongoose.connect(mongoDbUrl);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(error);
    throw new Error('Cannot connect to the database.');
  }
}
