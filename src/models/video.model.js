import mongoose , {Schema} from "mongoose";

const videoSchema=new Schema(
    {
        id:{
            type:String,
            required:true
        },
        videoFile:{
            type:String, // from cloudinary URL
            required:true,
        },
        thumbNail:{
            type:String, // from cloudinary URL
            required:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number, // from cloudinary URL
            required:true
        }, 
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        }
    },{timestamps:true}
)