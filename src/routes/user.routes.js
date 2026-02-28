import { Router } from "express";
import { registerUser } from "../controllers/user.controller";

const router=Router()

router.route("/register").post(registerUser)
// https/localhost:8000/users/register --> after /users control will be given to /register

export default router