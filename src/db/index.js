import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connect_DB=async()=>{
    // try {
    //     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    // } catch (error) {
    //     console.log("MONGODB connection FAILED ", error);
    //     process.exit(1)
    // }
  try{
    const mongoBaseUrl=process.env.MONGODB_URL;
    if(!mongoBaseUrl) {
      throw new Error("Missing env var MONGODB_URL (check your .env file)");
    }
    const connectionInstance=await mongoose.connect(`${mongoBaseUrl}/${DB_NAME}`);
    const dbHost=connectionInstance?.connection?.host ??
        (()=>{ // an iife
        try{
          return new URL(mongoBaseUrl).host;
        }catch{
          return undefined;
        }
      })();

    console.log(`MongoDB connected! DB HOST: ${dbHost ?? "(unknown)"}`);
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connect_DB;