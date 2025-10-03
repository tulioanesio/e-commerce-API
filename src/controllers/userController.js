import express from "express";
import { registerUser, loginUser, tokenUser, logoutUser } from "../services/userService.js";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/me", tokenUser)
router.get("/logout", logoutUser)

export default router
