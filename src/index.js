import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config(); // Ensures it loads the .env file from the root directory.

const app = express();

// Connect to the database
connectDB()
  .then(() => {
    console.log("Database connected successfully");

    // Start the server
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process if the database connection fails
  });

// Handle unexpected server errors
app.on("error", (err) => {
  console.error("An error occurred on the server:", err);
});



/*

import express from "express";
const app = express();

;( async () => {
    try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
        console.log("db sey kiya error", error);
        throw error;
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    });
    } catch (error) {
        console.error( "error connect to db" ,error);
        throw error;
    }
})()
*/