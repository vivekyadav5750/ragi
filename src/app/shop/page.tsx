import Image from "next/image";
import React from "react";
import { Heart } from "lucide-react";
import shopData from "@/data/shopData";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center md:p-10">
      <h1 className="font-mono text-3xl text-blue-500 ">All Products</h1>

      {/* Container for Left Side and Right Side */}
      {shopData.map((product, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full p-4 border"
        >
          {/* Left Side (Product Details) */}
          <div className="lg:col-span-1 bg-gray-100 p-4 rounded-lg shadow-lg md:flex md:flex-col items-center justify-center md:space-y-8">
            <h1 className="text-2xl md:text-4xl font-mono font-bold text-gray-800">
              {product.productName}
            </h1>
            <p className="text-gray-600 mt-2 text-base text-justify">
              {product.description}
            </p>
            {/* Product Features */}
            {/* <ul className="mt-4 space-y-2 text-gray-500">
              {product.features.map((feature, i) => (
                <li key={i} className="list-disc">{feature}</li>
              ))}
            </ul> */}
          </div>

          {/* Right Side (Related Products Grid, 3 Columns) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.relatedProducts.map((relatedProduct, index) => (
                <div
                  key={index}
                  className="relative bg-white p-4 rounded-lg text-center group"
                >
                  {/* Wishlist Heart Icon (appears on hover) */}
                  <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white p-2 rounded-full">
                      <Heart className="text-gray-500 w-6 h-6 group-hover:text-red-500" />
                    </div>
                  </div>

                  {/* Related Product Image */}
                  <div className="relative overflow-hidden rounded-lg">
                    {/* attach link by click on it redirect to dynamic link */}
                    <Link
                      href={`/dynamic/${product.productId}-${relatedProduct.productId}`}
                    >
                      <Image
                        src={relatedProduct.img[0]}
                        alt={relatedProduct.title}
                        width={500}
                        height={300}
                        className="rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                      />
                    </Link>

                    {/* Quick View button */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                      Quick View
                    </div>
                  </div>

                  {/* Related Product Info */}
                  <div className="mt-4">
                    <p className="text-gray-500 text-xs">
                      {relatedProduct.description}
                    </p>
                    <h2 className="text-lg font-bold">
                      {relatedProduct.title}
                    </h2>
                    <p className="text-black font-semibold">
                      {relatedProduct.price}
                    </p>
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
