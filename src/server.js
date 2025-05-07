import express from "express";
import productRoutes from "./routes.js"
import userRoutes from "./routes.js"
import cartRoutes from "./routes.js"
import auth from "./middlewares/auth.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/", productRoutes)
app.use("/", userRoutes)
app.use("", auth, cartRoutes)

app.listen(3000, () => console.log("Running server"))