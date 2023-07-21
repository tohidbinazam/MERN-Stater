import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connect failed: ${error.message}`);
  }
};

export default connectDB;
