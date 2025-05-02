import express from "express";
import { createProduct, getAllProducts, deleteProduct, editProduct } from "./controllers/productController.js";

const router = express.Router()

router.post("/register", createProduct)
router.get("/list", getAllProducts)
router.put("/edit", editProduct)
router.delete("/delete", deleteProduct)

export default router
