// npm i multer
import multer from "multer"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp') // we changed the destination folder to public/temp 
    // cb ---> callback
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

export const upload = multer({  
    storage,
})