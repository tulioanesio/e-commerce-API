import express from "express";
import { getAllProducts, detailProduct} from "../services/productService.js";

const router = express.Router()

router.get("/home", getAllProducts)
router.get("/product/:id", detailProduct)

export default router
