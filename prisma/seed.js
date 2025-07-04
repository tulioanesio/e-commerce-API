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
        imageUrl:
          "https://dezlwerqy1h00.cloudfront.net/Media/Images/Product/Visual/22879_pictures_product_visual_1.png?auto=webp&format=pjpg&quality=100",
      },
      {
        name: "60% RGB Mechanical Keyboard",
        price: 89.99,
        description:
          "Compact 60% mechanical keyboard equipped with hot-swappable blue switches, full-spectrum RGB backlighting with multiple effects, and dual-mode wireless (Bluetooth 5.0 + 2.4GHz) support. Designed for gamers and minimal setups with customizable macros and key remapping.",
        stock: 30,
        imageUrl:
          "https://mountain.gg/assets/1-1920x1080-Everest-60-Render.png",
      },
      {
        name: "Active Noise-Cancelling Bluetooth Headphones",
        price: 149.99,
        description:
          "Premium over-ear headphones with hybrid active noise cancellation, 40mm drivers for deep bass and crisp highs, and Bluetooth 5.0 for fast, stable wireless connection. Includes built-in mic, soft memory foam ear cups, and up to 30 hours of battery life with USB-C charging.",
        stock: 20,
        imageUrl:
          "https://edifier.com.au/cdn/shop/files/edifier-w820nb-black-1_6578b1c0-ca74-4df3-98fb-47839ab3d16a.png?v=1702455737",
      },
      {
        name: "Notebook Samsung Galaxy Book4 Pro",
        price: 899.99,
        description:
          "The Samsung Galaxy Book4 Pro is an engineering masterpiece designed for those seeking a powerful and stylish laptop. With a state-of-the-art Intel Core Ultra 5 processor, 16GB of RAM and a fast 512GB SSD, this device delivers exceptional performance for multitasking, running demanding applications and creating multimedia content. Its high-resolution AMOLED display delivers vibrant colors and deep blacks for an immersive visual experience. Plus, its thin and light design makes it perfect for taking anywhere.",
        stock: 322,
        imageUrl:
          "https://images.samsung.com/is/image/samsung/p6pim/br/np940xgk-kg2br/gallery/br-galaxy-book4-pro-14-inch-np940-524433-np940xgk-kg2br-543710907?$684_547_PNG$",
      },
      {
        name: "Logitech MX Master 3S Wireless Mouse",
        price: 99.99,
        description:
          "Premium wireless mouse with ultra-fast scrolling, ergonomic design, and Darkfield tracking for use on any surface. Features customizable buttons and multi-device connectivity (up to 3 devices). 70-day battery life.",
        stock: 45,
        imageUrl:
          "https://resource.logitech.com/w_692,h_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1",
      },
      {
        name: "Apple AirPods Pro (2nd Generation)",
        price: 249.0,
        description:
          "Active Noise Cancellation and Adaptive Transparency mode. Personalized Spatial Audio with dynamic head tracking. Sweat and water resistant. MagSafe Charging Case with speaker and lanyard loop. Up to 6 hours of listening time.",
        stock: 60,
        imageUrl:
          "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png",
      },
      {
        name: "Galaxy Watch6 (Bluetooth, 40mm)",
        price: 399.99,
        description:
          "The Samsung Galaxy Watch 6 Small (40mm) offers a sleek and minimalist black design, perfect for those who prefer a lighter, more compact smartwatch. Its Super AMOLED display delivers vibrant colors and sharp visuals. Powered by Wear OS and featuring 16 GB of storage, it lets you store music, apps, and data right on your wrist. With up to 40 hours of battery life, it keeps up with your day. Stay connected with notifications for calls, messages, and apps. Health features include heart rate monitoring, sleep tracking, step counting, and exercise tracking — helping you stay active and informed.",
        stock: 25,
        imageUrl:
          "https://images.samsung.com/is/image/samsung/p6pim/br/2307/gallery/br-galaxy-watch6-r935-sm-r930nzkpzto-537403046?$684_547_PNG$",
      },
      {
        name: "Samsung T7 Shield 1TB Portable SSD",
        price: 89.99,
        description:
          "Rugged portable SSD with IP65 rating for water and dust resistance. Shock-resistant up to 3 meters. USB 3.2 Gen 2 with read/write speeds up to 1,050/1,000 MB/s. Compact and lightweight with durable rubber exterior.",
        stock: 40,
        imageUrl:
          "https://images.samsung.com/is/image/samsung/p6pim/br/mu-pe1t0s-ww/gallery/br-portable-ssd-t7-shield-mu-pe1t0s-ww-538083039?$684_547_PNG$",
      },
      {
        name: "Razer BlackWidow V4 Pro Mechanical Keyboard",
        price: 229.99,
        description:
          "Full-size mechanical keyboard with Razer Yellow Mechanical Switches for lightning-fast actuation. Doubleshot ABS keycaps, multi-function digital dial, 8 programmable macros. Razer Chroma RGB with 16.8 million colors. Magnetic plush leatherette wrist rest included.",
        stock: 15,
        imageUrl:
          "https://assets3.razerzone.com/npHBESojkb2HBkJ3f6vei0Sq9d4=/1199x799/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh2a%2Fhd3%2F9538807103518%2Fblackwidow-v3-black-5-500x500.png",
      },
      {
        name: "Anker 737 Power Bank (PowerCore 24K)",
        price: 159.99,
        description:
          "High-capacity 24,000mAh portable charger with 140W USB-C output for laptops, tablets, and phones. Features a smart digital display showing real-time power stats, dual USB-C and USB-A ports, and advanced temperature control for safe fast charging.",
        stock: 35,
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0491/8460/4324/products/A1289011-Anker_737_Power_Bank_PowerCore_24K_6.png?v=1749116550",
      },
      {
        name: "Logitech StreamCam Full HD Webcam",
        price: 129.99,
        description:
          "Full HD 1080p webcam at 60fps optimized for content creators. Features auto-framing, smart exposure, dual front-facing microphones, and USB-C connectivity. Compatible with OBS, Streamlabs, and major streaming platforms.",
        stock: 28,
        imageUrl:
          "https://ae01.alicdn.com/kf/H3ff58b1c2deb4266b12e5b7c0b7b71e5p.png",
      },
      {
        name: "Elgato Wave:3 USB Condenser Microphone",
        price: 169.99,
        description:
          "Professional-grade microphone with cardioid condenser capsule, digital mixing software, and Clipguard technology to prevent distortion. Ideal for streaming, podcasting, and voice recording with a plug-and-play USB-C interface.",
        stock: 18,
        imageUrl:
          "https://res.cloudinary.com/elgato-pwa/image/upload/q_auto,f_auto/v1708611849/legacy/templateHardwareHotspotPanel/c9c7wqctq122rxbazhst.png",
      },
      {
        name: "LG UltraGear 27” QHD 165Hz Gaming Monitor",
        price: 349.99,
        description:
          "27-inch QHD gaming monitor with 165Hz refresh rate, 1ms response time, and NVIDIA G-Sync compatibility. Features IPS panel for wide viewing angles, vibrant colors, and ultra-thin bezels for immersive gameplay.",
        stock: 12,
        imageUrl:
          "https://img.evetech.co.za/repository/ProductImages/lg-27gr75q-ultragear-27-inch-qhd-gaming-monitor-2000px-v0002.webp",
      },
      {
        name: "Google Pixel Buds Pro",
        price: 199.0,
        description:
          "Wireless earbuds with Active Noise Cancellation, custom 11mm drivers, and up to 11 hours of listening time (31 with case). Supports wireless charging, multipoint connectivity, and Google Assistant voice control.",
        stock: 50,
        imageUrl:
          "https://t.ctcdn.com.br/9UsR94yfX6dHDbTfdk-OTI6TscE=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i927659.png",
      },
      {
        name: "Ugreen 100W USB-C GaN Charger",
        price: 69.99,
        description:
          "Compact GaN charger with 4 ports (3x USB-C, 1x USB-A) delivering up to 100W total output. Perfect for charging laptops, tablets, and phones simultaneously. Features intelligent power distribution and safety protections.",
        stock: 80,
        imageUrl:
          "https://eu.ugreen.com/cdn/shop/products/ugreen-nexode-usb-c-charger-100w-gan-desktop-charger-4-ports-laptop-adapter-183184.png?v=1697187398",
      },
      {
        name: "Steam Deck OLED (512GB)",
        price: 649.99,
        description:
          "Powerful handheld gaming PC with a vibrant 7.4'' OLED display, faster memory, and improved battery life. Features a custom AMD APU, trackpads, gyro controls, and full support for SteamOS and game emulation. Perfect for AAA gaming on the go.",
        stock: 22,
        imageUrl:
          "https://images.steamusercontent.com/ugc/1809895086193196457/08221EB82F3402F6899ABB5C91E1B404EB03D0CC/",
      },
      {
        name: "Sony WH-1000XM5 Noise-Cancelling Headphones",
        price: 399.99,
        description:
          "Industry-leading noise-cancelling headphones with premium sound quality, 8 microphones, and AI-powered ambient sound control. Sleek design with up to 30 hours of battery life and multi-device Bluetooth connectivity.",
        stock: 35,
        imageUrl:
          "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp",
      },
      {
        name: "Philips Hue White and Color Ambiance Starter Kit",
        price: 179.99,
        description:
          "Smart lighting starter kit with 3 color bulbs, a Hue Bridge, and full app control. Choose from millions of colors and dynamic scenes. Works with Alexa, Google Assistant, and Apple HomeKit.",
        stock: 55,
        imageUrl:
          "https://i5.walmartimages.com/seo/Philips-Hue-White-and-Color-Ambiance-A19-E26-Medium-Base-Smart-Bulb-1-Pack-White_0b28fe1c-184e-4a40-84f9-b8b7a1e5672e.3894c2b644b436e72bc91b83a5f5acea.png?odnHeight=264&odnWidth=264&odnBg=FFFFFF",
      },
      {
        name: "Crucial X9 Pro 2TB Portable SSD",
        price: 139.99,
        description:
          "Ultra-fast 2TB portable SSD with USB 3.2 Gen 2 performance up to 1050MB/s. Durable anodized aluminum build, lightweight, and drop-proof up to 2 meters. Perfect for creatives and on-the-go backups.",
        stock: 48,
        imageUrl:
          "https://content.crucial.com/content/dam/crucial/ssd-products/x9-pro/photography/isolated/crucial-x9-pro-portable-ssd-left-angle.psd.transform/medium-png/image.png",
      },
      {
        name: "Dell UltraSharp 34” Curved USB-C Monitor (U3423WE)",
        price: 749.99,
        description:
          "Immersive 34” WQHD curved display with IPS technology, 100Hz refresh rate, and built-in USB-C hub for seamless docking. Ideal for multitasking, design, and productivity workflows with stunning color accuracy.",
        stock: 10,
        imageUrl:
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/output-devices/dell/monitors/u3423we/media-gallery/monitor-u3423we-silver-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=474&qlt=100,1&resMode=sharp2&size=474,320&chrss=full",
      },
    ],
    skipDuplicates: true,
  });

  console.log(`Inserted ${createMany.count} products`);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
