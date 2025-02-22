import mongoose from 'mongoose';
import { DB_NAME } from '../constants';

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connect! DB HOST: ${connectInstance.connection.host}`)
  } catch (error) {
    console.log("MONGODB Connection Error", error)
    process.exit(1)
  }
}

export default connectDB;
