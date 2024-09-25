"use client";
import shopData from "@/data/shopData";
import Image from "next/image";

import React, { useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  // retreive id from params and split it to get the product ids by splitting it with '-'
  const [productId, relatedProductId] = params.id.split("-");
  // console.log("productId", productId);
  // console.log("relatedProductId", relatedProductId);

  // find the product from shopData by productId
  const product = shopData.find((product) => product.productId === productId);
  // console.log("product", product);

  // find the related product from the product by relatedProductId
  const relatedProduct = product?.relatedProducts.find(
    (relatedProduct) => relatedProduct.productId === relatedProductId
  );
  console.log("relatedProduct", relatedProduct);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Handle Image Click
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  // Increase/Decrease quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // return (
  //   <div className="mt-16">Page : {params.id}</div>
  // );
  return (
    <div className="container mx-auto p-8 mt-16">
      {/* if product is not found then show no product found */}

      {product && relatedProduct ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Image Slider */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-96">
              <Image
                src={relatedProduct.img[selectedImageIndex]}
                alt={relatedProduct?.title || "Product image"}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
              <div className="absolute bottom-4 right-4">
                <button className="p-2 bg-white shadow-lg rounded-full">
                  <i className="fas fa-expand-arrows-alt"></i>{" "}
                  {/* Icon for full screen */}
                </button>
              </div>
            </div>
            {/* Thumbnail Images */}
            <div className="flex mt-4 space-x-4">
              {relatedProduct.img.map((img, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-1 border rounded-lg ${
                    selectedImageIndex === index
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={img}
                    alt="Product thumbnail"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{relatedProduct.title}</h1>
            <p className="text-xl text-red-600 font-bold">₹{relatedProduct.price}</p>
            <p className="text-sm text-gray-500">
              SKU: {product.sku} | Category: {product.category}
            </p>
            <p className="text-green-500 font-bold">{product.stockStatus}</p>

            <p className="text-gray-700">{relatedProduct.description}</p>

            {/* Why you should buy this */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Why you should buy this?
              </h3>
              <ul className="list-disc ml-5 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Weight Selection */}
            <div className="flex items-center space-x-2">
              <label className="font-semibold">Weight :</label>
              <select className="border border-gray-300 p-2 rounded-md">
                {product.weights.map((weight, index) => (
                  <option key={index} value={weight}>
                    {weight}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Selector and Add to Cart */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  className="px-3 py-1 text-gray-700"
                  onClick={handleDecrease}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-none"
                />
                <button
                  className="px-3 py-1 text-gray-700"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>No Product Found</div>
      )}
    </div>
  );
}
