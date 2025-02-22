

import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connect! DB HOST: ${connectInstance.connection.host}`)
  } catch (error) {
    console.log("MONGODB Connection Failed", error)
    process.exit(1)
  }
}

export default connectDB;
