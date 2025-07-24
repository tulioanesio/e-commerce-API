import express from "express";
import auth from "./middlewares/auth.js"
import { registerUser, loginUser, tokenUser, logoutUser } from "./controllers/userController.js";
import { getAllProducts, detailProduct} from "./controllers/productController.js";
import { getCart, removeCart, postCart, checkout, clearCart} from "./controllers/cartController.js";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/me", tokenUser)
router.get("/logout", logoutUser)

router.get("/home", getAllProducts)
router.get("/product/:id", detailProduct)

router.get("/cart", auth, getCart)
router.delete("/cart/:id", auth, removeCart)
router.post("/cart/:id", auth, postCart)
router.get("/checkout", auth, checkout)
router.delete("/clear", auth, clearCart);


export default router
