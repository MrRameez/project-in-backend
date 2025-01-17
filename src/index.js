import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env",
});

connectDB()
.then(() => {
    app.on( "error",(err)=>{
        console.log("db sey kiya error", err);
        throw err;
        app.listen(process.env.PORT || 8000 ,()=>{
            console.log(`server is runing on this port${Process.env.PORT}`);
            
        })
    })
})
.catch((error) => {
    console.error("error connecting to db", error);
    process.exit(1);
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