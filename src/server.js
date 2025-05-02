import express from "express";
import productRoutes from "./routes.js"

const app = express()
app.use(express.json())

app.use("/products", productRoutes)

app.listen(3000, () => console.log("Servidor rodando"))