import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";

dotenv.config();
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const postCart = async (req, res) => {
  const productId = parseInt(req.params.id);
  const userId = req.userId;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated." });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productId || isNaN(productId)) {
      return res
        .status(400)
        .json({ message: "Invalid or missing product ID." });
    }

    let cart = await prisma.cart.findFirst({
      where: {
        userId,
      },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          user: {
            connect: { id: userId },
          },
        },
      });
    }

    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: product.id,
      },
    });

    let cartItem;

    if (existingItem) {
      cartItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: {
          quantity: existingItem.quantity + 1,
        },
      });
    } else {
      cartItem = await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: product.id,
          quantity: 1,
          productName: product.name,
          productPrice: product.price,
          productImageUrl: product.imageUrl,
        },
      });
    }

    res.status(200).json({ message: "Product added in the cart!", cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

export const removeCart = async (req, res) => {
  const itemId = parseInt(req.params.id);

  try {
    const cartItem = await prisma.cartItem.delete({
      where: {
        id: itemId,
      },
    });

    res.status(200).json({ message: "Item deleted successfully.", cartItem });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Could not delete item." });
  }
};

export const getCart = async (req, res) => {
  const userId = req.userId;

  try {
    const cart = await prisma.cart.findFirst({
      where: {
        userId,
      },
      include: {
        items: {
          orderBy: { id: "asc" },
        },
      },
    });

    if (!cart) {
      return res
        .status(404)
        .json({ message: "You need to add items to the cart." });
    }

    res.status(200).json({ message: "Cart successfully listed", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

export const checkout = async (req, res) => {
  const userId = req.userId;

  try {
    const cart = await prisma.cart.findFirst({
      where: { userId },
      include: { items: true },
    });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const line_items = cart.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName,
          images: [item.productImageUrl],
        },
        unit_amount: Math.round(item.productPrice * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["BR", "US"],
      },
      line_items,
      success_url: `${process.env.BASE_URL}/success`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    res.status(500).json({ message: "Failed to create checkout session" });
  }
};

export const clearCart = async (req, res) => {
  const userId = req.userId;

  try {
    const cart = await prisma.cart.findFirst({
      where: { userId },
    });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found." });
    }

    await prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });

    res.status(200).json({ message: "Cart cleared successfully." });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Failed to clear cart." });
  }
};
