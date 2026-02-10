import mongoose from "mongoose";
import { DB_NAME } from "../constant";
import connect_DB from "./db";


connect_DB





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