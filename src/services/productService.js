import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  const search = req.query.search || "";

  try {
    let products;

    if (search) {
      products = await prisma.product.findMany({
        where: {
          name: {
            contains: search,
            mode: "insensitive",
          },
        },
      });
    } else {

      products = await prisma.product.findMany({
        select: {
          id: true,
          name: true,
          price: true,
          imageUrl: true,
        },
      });
    }

    res.status(200).json({ message: "Products successfully listed", products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server failure" });
  }
};

export const detailProduct = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
    });

    res.status(200).json({ message: "Product successfully listed", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
