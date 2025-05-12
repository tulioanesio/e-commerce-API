import express from "express";
import auth from "./middlewares/auth.js"
import { registerUser, loginUser } from "./controllers/userController.js";
import { getAllProducts, detailProduct} from "./controllers/productController.js";
import { getCart, postCart, checkout} from "./controllers/cartController.js";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)

router.get("/", getAllProducts)
router.get("/product/:id", detailProduct)

router.get("/cart", auth, getCart)
router.post("/cart/add/:id", auth, postCart)
router.get("/checkout", auth, checkout)


export default router
