import { asyncHandler } from "../utils/asyncHandler.js";

// the same code will be used in every project

const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"ok"
    })
})

export {registerUser}