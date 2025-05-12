import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes.js"
import userRoutes from "./routes.js"
import cartRoutes from "./routes.js"
import auth from "./middlewares/auth.js"
import cors from "cors"

dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())

app.use("/", productRoutes)
app.use("/", userRoutes)
app.use("/", cartRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Running server on port ${PORT}`))