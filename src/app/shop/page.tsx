// import Shophead from "@/components/Shophead";
// import Image from "next/image";
// import React from "react";
// import { PiCirclesFourFill } from "react-icons/pi";
// import { MdOutlineViewDay } from "react-icons/md";
// import Delivery from "@/components/Delivery";
// import Navbar from "@/components/Navbar";
// import Link from "next/link";
'use client'
import Navbarr from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";


// const page = () => {
//   const productImage = [
//     "/pick-pro-1.png",
//     "/pick-pro-2.png",
//     "/pick-pro-3.png",
//     "/pick-pro-4.png",
//     "/shop-pro-1.png",
//     "/shop-pro-2.png",
//     "/shop-pro-3.png",
//     "/shop-pro-4.png",
//     "/shop-pro-5.png",
//     "/shop-pro-6.png",
//     "/shop-pro-7.png",
//     "/shop-pro-8.png",
//     "/shop-pro-9.png",
//     "/shop-pro-10.png",
//     "/shop-pro-11.png",
//     "/shop-pro-11.png",
//     "/shop-pro-0.png",
//   ];

//   return (
// <main>
  
//   <Navbar bgColor="bg-white"/>
//   <Shophead headText="Shop" linkChange="shop"/>
//     <div className="relative text-center p-10">
//       <section
//         id="products"
//         className="w-full mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
//       >
//         {Array.from({ length: 16 }).map((_, index) => (
//           <div
//             key={index}
//             className="w-80 bg-white  rounded-xl duration-500 hover:scale-105 relative "
//           >
//             <Link href={"#"}>
//               <Image
//                 className="h-40 w-22 object-cover rounded-t-xl"
//                 src={productImage[index]}
//                 width={300}
//                 height={200}
//                 alt={`product ${index + 1}`}
//               />

//               <div className="px-4 py-3 w-72">
//                 <p className="text-lg  text-black ">
//                   Trend Modular Sofa {index + 1}
//                 </p>

//                 <div className="flex items-center">
//                   <p className="text-lg font-semibold text-black my-3 cursor-auto">
//                     RS:25000.00
//                   </p>
//                   <div className="ml-auto">
//                     {/* <FaShoppingCart className="w-5 h-5 text-blue-800" /> */}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </section>
//     </div>
//     <Delivery/>
// </main>    
//   );
// };

// export default page;













// right code 


// ////////////////////////////////////////////////////////
// type Product = {
//   _id: string;
//   name: string;
//   imagePath: string;
//   description: string;
//   price: number;
//   category: string;
//   stockLevel: number;
//   isFeaturedProduct: boolean;
// };

// async function getProducts(): Promise<Product[]> {
//   return client.fetch(`*[_type == 'product']`);
// }

// export default async function ShopPage() {
//   const products = await getProducts();

//   return (
//     <main>
//       <Navbarr bgColor='bg-white'/>
//       <Shophead headText='Shop' linkChange='shop'/>
//     <div className="bg-slate-200 ">
//       <h1 className="text-4xl font-bold  text-center p-10 ">Products</h1>
//       <div >
//       <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 ">
//         {products.map((product) => (
//           <li key={product._id}>
//             <Image
//               className="relative h-60 w-22 object-cover rounded-t-xl"
//              src={product.imagePath} alt={product.name} width={300} height={200} 
//              />
//              <div className="absolute font-bold border p-2 -mt-10  hover:bg-black hover:text-white rounded-lg">
//               <Link href={''}>
//               <button>Add To Cart</button>
//               </Link>
//              </div>
//              <div className="px-4 py-3 w-72">
//             <h2 className="text-orange-600 font-bold text-2xl">{product.name}</h2>
//             <p className="text-gray-500 text-sm">{product.description}</p>
//             <p className="text-xl font-bold text-gray-700">Price: ${product.price}</p>
//             <div className="flex flex-col text-blue-700 p-2 rounded-lg">
//             <p>Category: {product.category}</p>
//             {/* <p>Stock Level: {product.stockLevel}</p>
//             <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p> */}
//             </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//       </div>
//     </div>
//     </main>
//   );
// }

// right code end







const showAlert = () => {
  alert('Product added to cart');
}
console.log('showAlert', showAlert);



type Product = {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
};

async function getProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == 'product']`);
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main>
      <Navbarr bgColor='bg-white'/>
      <Shophead headText='Shop' linkChange='shop'/>
    <div className="bg-slate-200 ">
      <h1 className="text-4xl font-bold  text-center p-10 ">Products</h1>
      <div >

        <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 ">
        {products.map((product) => (
          
          <li key={product._id}>
            <Link href={`/product/${product._id}`}>
            <Image
              className="relative h-60 w-22 object-cover rounded-t-xl"
             src={product.imagePath} alt={product.name} width={300} height={200} 
             />
            </Link>
             
             <div className="px-4 py-3 w-72">
            <h2 className="text-orange-600 font-bold text-2xl">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <p className="text-xl font-bold text-gray-700">Price: ${product.price}</p>
            <div className="flex flex-col text-blue-700 p-2 rounded-lg">
            <p>Category: {product.category}</p>
            <div className=" font-bold border p-2   hover:bg-black hover:text-white rounded-lg">
              <Link href={''}>
              <button onClick={showAlert}>Add To Cart</button>
              </Link>
             </div>
            {/* <p>Stock Level: {product.stockLevel}</p>
            <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p> */}
            </div>
            </div>
          </li>
          
        ))}
      </ul>
      </div>
    </div>
    </main>
  );
}




