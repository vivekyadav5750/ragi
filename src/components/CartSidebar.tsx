"use client";
import React, { useState } from "react";
import { X } from "lucide-react"; // Icon for close button
import { Button } from "./ui/button"; // Shadcn button component
import Image from "next/image";

const CartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dummy cart items
  const cartItems = [
    {
      id: 1,
      name: "Shatavari Herb Mix",
      price: 310,
      quantity: 1,
      image: "/images/ragi1.jpg", // Replace with your image URL
    },
    {
      id: 2,
      name: "Shankhpushpi Brahmi Herb Mix",
      price: 610,
      quantity: 1,
      image: "/images/ragi1.jpg", // Replace with your image URL
    },
  ];

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      {/* Button to open the cart */}
      <Button onClick={() => setIsOpen(true)}>Open Cart</Button>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}>
        {/* Close Button */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            className="text-gray-500 hover:text-red-500"
            onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4">
               <Image src={item.image} alt={item.name} width={80} height={80} /> 
              {/* <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" /> */}
              <div className="flex flex-col justify-between flex-grow ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-sm text-gray-500">Qty: {item.quantity}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-lg">₹{item.price}</span>
                <button className="text-gray-500 hover:text-red-500">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal & Checkout */}
        <div className="p-4 border-t">
          <div className="flex justify-between text-lg font-bold">
            <span>Subtotal:</span>
            <span>₹{totalAmount}</span>
          </div>
          <Button className="w-full mt-4">Go to Checkout</Button>
        </div>
      </div>

      {/* Backdrop when the cart is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}></div>
      )}
    </div>
  );
};

export default CartSidebar;
