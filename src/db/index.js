import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
   const connectionInstents = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
   console.log("Database connected successfully",connectionInstents.connection.host) 
  } catch (error) {
    console.log("error connecting to database", error);
    process.exit(1);
    throw error;
    
  }
}

export default connectDB;