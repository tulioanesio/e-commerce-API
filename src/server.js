import dotenv from "dotenv";
import express from "express";
import productRoutes from "./controllers/productController.js"
import userRoutes from "./controllers/userController.js"
import cartRoutes from "./controllers/cartController.js"
import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config();
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.BASE_URL,
    credentials: true
}))

app.use("/", productRoutes)
app.use("/", userRoutes)
app.use("/", cartRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Running server on port ${PORT}`))