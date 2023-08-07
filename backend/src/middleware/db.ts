import mongoose from 'mongoose';

export const connectDB = async (MONGO_URI: string) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Successfully connected to mongodb');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};
