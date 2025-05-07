import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createMany = await prisma.product.createMany({
    data: [
      { 
        name: "Wireless Mouse", 
        price: 29.99, 
        description: "Ergonomic wireless mouse with adjustable DPI and long battery life.", 
        stock: 50 
      },
      { 
        name: "Mechanical Keyboard", 
        price: 89.99, 
        description: "RGB backlit mechanical keyboard with blue switches and customizable keys.", 
        stock: 30 
      },
      { 
        name: "Noise-Cancelling Headphones", 
        price: 149.99, 
        description: "Over-ear noise-cancelling headphones with 20-hour battery life and Bluetooth 5.0.", 
        stock: 20 
      },
      { 
        name: "4K Monitor 27-inch", 
        price: 399.99, 
        description: "27-inch 4K UHD monitor with HDR support and ultra-thin bezels.", 
        stock: 10 
      }
    ]
  });

  console.log(`Inserted ${createMany.count} products`);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
