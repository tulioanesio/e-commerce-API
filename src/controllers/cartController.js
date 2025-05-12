import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postCart = async (req, res) => {
    const productId = parseInt(req.params.id);
    const userId = req.userId; 
  
    if (!userId) {
      return res.status(401).json({ message: "User not authenticated." });
    }
  
    try {
      const product = await prisma.product.findUnique({
        where: { id: productId }
      });
  
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }
  
   
      let cart = await prisma.cart.findFirst({
        where: {
          userId,
          items: {
            some: {}, 
          },
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
          },
        });
      }
  
      res.status(200).json({ message: "Product added in the cart!", cartItem });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error." });
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
          items: true, 
        },
      });
  
      if (!cart) {
        return res.status(404).json({ message: "You need to add items to the cart." });
      }
  
      res.status(200).json({ message: "Cart successfully listed", cart });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error." });
    }
  };
  



export const checkout = async (req, res) => {
    
}