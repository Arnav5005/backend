import express from "express"
import cors from "cors"
import cookieParser from "cookies-parser"

const app=express()

// CORS refers to cross origin resource sharing is a browser security mechanism that controls how resources (like APIs, images, fonts) are requested from a different origin (domain, port, or protocol).

/*
| URL                                              | Same Origin?               |
| ------------------------------------------------ | -------------------------  |
| `http://example.com` → `http://example.com/api`  | ✅ Yes                     |
| `http://example.com` → `https://example.com`     | ❌ No (different protocol) |
| `http://example.com` → `http://api.example.com`  | ❌ No (different domain)   |
| `http://example.com` → `http://example.com:3000` | ❌ No (different port)     |
*/

// Syntax - app.use(cors());

app.use(cors({ // app.use() is used for middlewares
    origin:process.env.CORS_ORIGIN,
    credentials: true
}))

// express configurations

app.use(express.json({limit: "16kb"}))
app. use(express. urlencoded ({extended: true, limit: "16kb"} ) )
app.use(express.static("public"))
app.use(cookieParser())

export {app}