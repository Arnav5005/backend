import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connect_DB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected ! DB HOST : ${connectionInstance.connect.host}`)
    }
    catch(error){
        console.log("MongoDB connection error",error)
        process.exit(1) 
    }
}

export default connect_DB