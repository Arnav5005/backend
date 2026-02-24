// we are assuming that file is on local server so we just need to take that file and upload it to cloudinary and removing it from local server
// npm i cloudinary
// in node we use fs for file operations
import {v2 as cloudinary} from cloudinary
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAMe,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary=async (localfilepath)=>{
    try {
        if(!localfilepath){
            return null;
        }
        // upload file on cloudinary
        const response=await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary",response.url)
        return response
    } catch (error) {
        // if file is not uploaded on cloudinary then we should also remove it from the server using .unlink 
        fs.unlinkSync(localfilepath) // remove the locally saved temporary file as the upload operation failed
        return null;
    }
}

export {uploadOnCloudinary}