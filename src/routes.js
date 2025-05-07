import express from "express";
import auth from "./middlewares/auth.js"
import { registerUser, loginUser } from "./controllers/userController.js";
import { getAllProducts, detailProduct} from "./controllers/productController.js";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)

router.get("/products", getAllProducts)
// router.get(`/details/${id}`, detailProduct)



export default router
