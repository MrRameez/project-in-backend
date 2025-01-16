import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
      const connectionInstent = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log(`MongoDB connected: ${connectionInstent.connection.host}`);
      
    } catch (error) {
        console.log( "MONGODB ERROR " ,error);
        process.exit(1);
        throw error;
    }
}

export default connectDB;