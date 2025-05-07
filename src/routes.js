import express from "express";
import auth from "./middlewares/auth.js"
import { registerUser, loginUser } from "./controllers/userController.js";
import { getAllProducts, detailProduct} from "./controllers/productController.js";
import { getCart, checkout} from "./controllers/cartController.js";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)

router.get("/", getAllProducts)
// router.get(`/details/${id}`, detailProduct)

router.get("/cart", getCart)
router.get("/checkout", checkout)


export default router
