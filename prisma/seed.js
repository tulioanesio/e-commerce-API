import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createMany = await prisma.product.createMany({
    data: [
      { 
        name: "Wireless Mouse", 
        price: 29.99, 
        description: "Ergonomic wireless mouse with adjustable DPI and long battery life.", 
        stock: 50,
        imageUrl: "https://m.media-amazon.com/images/I/61qpQ7ZsSmL.jpg"
      },
      { 
        name: "Mechanical Keyboard", 
        price: 89.99, 
        description: "RGB backlit mechanical keyboard with blue switches and customizable keys.", 
        stock: 30,
        imageUrl: "https://www.bsavvi.co.uk/cdn/shop/files/k68-mechanical-gaming-keyboard-60percent-wireless-bluetooth-5-02-4ghz-bsavvi-1-34944275611941.jpg?v=1692923385"
      },
      { 
        name: "Noise-Cancelling Headphones", 
        price: 149.99, 
        description: "Over-ear noise-cancelling headphones with 20-hour battery life and Bluetooth 5.0.", 
        stock: 20,
        imageUrl: "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg"
      },
      { 
        name: "4K Monitor 27-inch", 
        price: 399.99, 
        description: "27-inch 4K UHD monitor with HDR support and ultra-thin bezels.", 
        stock: 10,
        imageUrl: "https://www.hp.com/ca-en/shop/Html/Merch/Images/c08895796_1750x1285.jpg"
      }
    ]
  });

  console.log(`Inserted ${createMany.count} products`);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
