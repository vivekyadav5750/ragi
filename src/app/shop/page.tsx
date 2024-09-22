import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
// import { shopData } from "@/data/dataVariables";

interface Product {
  productName: string;
  productDescription: string;
  productList: {
    title: string;
    img: string;
    price: string;
    description: string;
  }[];
}

const shopData: Product[] = [
  // Product 1
  {
    productName: 'Cookies',
    productDescription: 'Ragi cookies are a healthy and tasty snack option made from ragi flour. They are rich in fiber, protein, and other essential nutrients, making them a great choice for those looking for a nutritious snack.',
    productList: [
      {
        title: "Dashmool Kaadha",
        img: "/images/ragi_cookies.jpg", // Replace with actual image path
        price: "₹110.00",
        description: "Post pregnancy care lactation, pick and...",
      },
      {
        title: "Product 2",
        img: "/images/ragi_cookies.jpg",
        price: "₹150.00",
        description: "Product 2 description...",
      },
      {
        title: "Product 3",
        img: "/images/ragi_cookies.jpg",
        price: "₹200.00",
        description: "Product 3 description...",
      },
    ],
  },
  // Add more arrays of products as needed
  // Product 2
  {
    productName: 'Dashmool Kaadha',
    productDescription: 'Dashmool Kadha is a traditional Ayurvedic formulation made from the roots of ten herbs. It is known for its rejuvenating and revitalizing properties, making it an excellent choice for those looking to boost their overall health and well-being.',
    productList: [
      {
        title: "Dashmool Kaadha",
        img: "/images/ragi_cookies.jpg", // Replace with actual image path
        price: "₹110.00",
        description: "Post pregnancy care lactation, pick and...",
      },
      {
        title: "Product 2",
        img: "/images/ragi_cookies.jpg",
        price: "₹150.00",
        description: "Product 2 description...",
      },
      {
        title: "Product 3",
        img: "/images/ragi_cookies.jpg",
        price: "₹200.00",
        description: "Product 3 description...",
      },
    ],
  },
];

export default function Shop() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center md:p-10">
      <h1 className="font-mono text-3xl text-blue-500 ">All Products</h1>

      {/* Container for Left Side and Right Side */}
      {shopData.map((product, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full p-4 border ">
          {/* Left Side (Cookies) */}
          <div className="lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow-lg md:flex md:flex-col items-center justify-center md:space-y-8">
            <h1 className="text-2xl md:text-4xl font-mono font-bold text-gray-800">
              {product.productName}
            </h1>
            <p className="text-gray-600 mt-2 text-base text-justify ">
              {product.productDescription}
            </p>
          </div>

          {/* Right Side (Product Grid, 3 Columns) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.productList.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-white p-4 rounded-lg text-center  group"
                >
                  {/* Wishlist Heart Icon (appears on hover) */}
                  <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white p-2 rounded-full">
                      <Heart className="text-gray-500 w-6 h-6 group-hover:text-red-500" />
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />

                    {/* Quick View button */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                      Quick View
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-4">
                    <p className="text-gray-500 text-xs">{item.description}</p>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-black font-semibold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
