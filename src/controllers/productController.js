import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      omit: { description: true, stock: true },
    });

    res.status(200).json({ message: "Products successfully listed", products });
  } catch (error) {
    res.status(500).json({ message: "Server failure" });
    console.error(error);
  }
};

export const detailProduct = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: {id: Number(req.params.id)},
      omit: { id: true}
    })
    res.status(200).json({ message: "Products successfully listed", product });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
