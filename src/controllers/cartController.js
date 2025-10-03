import express from "express";
import auth from "../middlewares/auth.js"
import { getCart, removeCart, postCart, checkout, clearCart} from "../services/cartService.js";

const router = express.Router()

router.get("/cart", auth, getCart)
router.delete("/cart/:id", auth, removeCart)
router.post("/cart/:id", auth, postCart)
router.get("/checkout", auth, checkout)
router.delete("/clear", auth, clearCart);


export default router
