import mongoose ,{Schema} from "mongoose";

// here mongoose is a default export that's why it's without braces and {Schema} is a named export that's why braces are used 

const userSchema=new Schema( // refer image.png to know what are the required fields for this project to model
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, // trim removes trailing spaces or other unwanted characters from character string
            index: true, // to enable searching in DB this increases the cost but it's important in future 
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName:{
            type: String,
            required: true,
            // unique: true, // there can be many people with the same fullname 
            // lowercase: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String, // cloudinary url
            required: true,
        },
        coverImage:{
            type: String,
        },
        watcHHistory:[ // watchHistory is an array
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type: String,
            required: [true,"Password is required"],
        },
        refreshToken:{
            type: String
        }
    },{timestamps:true} // createdAt , updatedAt
)

export const User = mongoose.model("User",userSchema) // in mongo DB it'll reflect as users