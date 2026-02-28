import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router=Router()

router.route("/register").post(registerUser) // now in postman check post type request and enter the address you'll see whether your api is working or not
// https://localhost:8000/users/register --> after /users control will be given to /register

export default router