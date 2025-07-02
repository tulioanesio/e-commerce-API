import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createMany = await prisma.product.createMany({
    data: [
      {
        name: "Wireless Ergonomic Mouse",
        price: 29.99,
        description:
          "Compact ergonomic wireless mouse featuring adjustable DPI (800/1200/1600), a silent-click design, and a 2.4GHz USB nano receiver for stable connection. Ideal for office work and long-term comfort. Up to 18-month battery life with auto-sleep mode.",
        stock: 50,
        imageUrl: "https://m.media-amazon.com/images/I/61qpQ7ZsSmL.jpg",
      },
      {
        name: "60% RGB Mechanical Keyboard",
        price: 89.99,
        description:
          "Compact 60% mechanical keyboard equipped with hot-swappable blue switches, full-spectrum RGB backlighting with multiple effects, and dual-mode wireless (Bluetooth 5.0 + 2.4GHz) support. Designed for gamers and minimal setups with customizable macros and key remapping.",
        stock: 30,
        imageUrl:
          "https://www.bsavvi.co.uk/cdn/shop/files/k68-mechanical-gaming-keyboard-60percent-wireless-bluetooth-5-02-4ghz-bsavvi-1-34944275611941.jpg?v=1692923385",
      },
      {
        name: "Active Noise-Cancelling Bluetooth Headphones",
        price: 149.99,
        description:
          "Premium over-ear headphones with hybrid active noise cancellation, 40mm drivers for deep bass and crisp highs, and Bluetooth 5.0 for fast, stable wireless connection. Includes built-in mic, soft memory foam ear cups, and up to 30 hours of battery life with USB-C charging.",
        stock: 20,
        imageUrl:
          "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg",
      },
      {
        name: 'Notebook Samsung Galaxy Book4 Pro',
        price: 899.99,
        description:
          "The Samsung Galaxy Book4 Pro is an engineering masterpiece designed for those seeking a powerful and stylish laptop. With a state-of-the-art Intel Core Ultra 5 processor, 16GB of RAM and a fast 512GB SSD, this device delivers exceptional performance for multitasking, running demanding applications and creating multimedia content. Its high-resolution AMOLED display delivers vibrant colors and deep blacks for an immersive visual experience. Plus, its thin and light design makes it perfect for taking anywhere.",
        stock: 322,
        imageUrl:
          "https://http2.mlstatic.com/D_NQ_NP_734859-MLU75756539177_042024-O.webp",
      },
      {
        name: "Logitech MX Master 3S Wireless Mouse",
        price: 99.99,
        description:
          "Premium wireless mouse with ultra-fast scrolling, ergonomic design, and Darkfield tracking for use on any surface. Features customizable buttons and multi-device connectivity (up to 3 devices). 70-day battery life.",
        stock: 45,
        imageUrl: "https://resource.logitech.com/w_692,h_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1",
      },
      {
        name: "Apple AirPods Pro (2nd Generation)",
        price: 249.00,
        description:
          "Active Noise Cancellation and Adaptive Transparency mode. Personalized Spatial Audio with dynamic head tracking. Sweat and water resistant. MagSafe Charging Case with speaker and lanyard loop. Up to 6 hours of listening time.",
        stock: 60,
        imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
      },
      {
        name: "Galaxy Watch6 (Bluetooth, 40mm)",
        price: 399.99,
        description:
          "The Samsung Galaxy Watch 6 Small (40mm) offers a sleek and minimalist black design, perfect for those who prefer a lighter, more compact smartwatch. Its Super AMOLED display delivers vibrant colors and sharp visuals. Powered by Wear OS and featuring 16 GB of storage, it lets you store music, apps, and data right on your wrist. With up to 40 hours of battery life, it keeps up with your day. Stay connected with notifications for calls, messages, and apps. Health features include heart rate monitoring, sleep tracking, step counting, and exercise tracking — helping you stay active and informed.",
        stock: 25,
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/br/2307/gallery/br-galaxy-watch6-r935-sm-r930nzkpzto-537403046?$684_547_PNG$",
      },
      {
        name: "Samsung T7 Shield 1TB Portable SSD",
        price: 89.99,
        description:
          "Rugged portable SSD with IP65 rating for water and dust resistance. Shock-resistant up to 3 meters. USB 3.2 Gen 2 with read/write speeds up to 1,050/1,000 MB/s. Compact and lightweight with durable rubber exterior.",
        stock: 40,
        imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/br/mu-pe1t0s-ww/gallery/br-portable-ssd-t7-shield-mu-pe1t0s-ww-538083039?$684_547_PNG$",
      },
      {
        name: "Razer BlackWidow V4 Pro Mechanical Keyboard",
        price: 229.99,
        description:
          "Full-size mechanical keyboard with Razer Yellow Mechanical Switches for lightning-fast actuation. Doubleshot ABS keycaps, multi-function digital dial, 8 programmable macros. Razer Chroma RGB with 16.8 million colors. Magnetic plush leatherette wrist rest included.",
        stock: 15,
        imageUrl: "https://m.media-amazon.com/images/I/81Wsrt05uLL.jpg",
      }
    ],
    skipDuplicates: true,
  });

  console.log(`Inserted ${createMany.count} products`);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
