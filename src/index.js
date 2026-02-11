// import mongoose from "mongoose";
// import { DB_NAME } from "../constant";
import connect_DB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();

// method 2 (make database_connection function in db folder and export it here)

connect_DB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!! ", error);
    process.exit(1);
  });

// Method-1 (using iife)

// always use try catch while taking to databases

/*

import express from "express";
const app=express()

(async()=>{
    try{

        // Database is in another continent therefore use async await

        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        // express error app 

        app.on("error",(error)=>{
            console.log("ERROR : ",error);
            throw error
        })

        // listen app

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
        
    }
    catch(error){
        console.error("ERROR : ",error);
        throw error
    }
})()
*/
