import { Heart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Products = [
  {
    title: "Dashmool Kaadha",
    img: "/images/ragi_flour.jpg", // Replace with actual image path
    price: "₹110.00",
    description: "Post pregnancy care lactation, pick and...",
  },
  // Add more products if needed
];

const Hoverdiv = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <h1 className="font-mono text-3xl text-blue-200 mb-6">Ragi Products</h1>

      <div className="flex -mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {Products.map((item, index) => (
            <div key={index} className="relative bg-white p-4 rounded-lg text-center shadow-lg group">
              {/* Wishlist Heart Icon */}
              <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
  );
};

export default Hoverdiv;
