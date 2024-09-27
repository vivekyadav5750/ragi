"use client";
import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming these are your shadcn-ui components
import Image from "next/image";
import CartSidebar from "@/components/CartSidebar";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Shatavari Herb Mix",
      price: 310,
      originalPrice: 310,
      image: "/images/ragi1.jpg",
    },
    {
      id: 2,
      name: "Shankhpushpi Brahmi Herb Mix",
      price: 610,
      originalPrice: 610,
      image: "/images/ragi1.jpg",
    },
  ];

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-6 mt-16">
      {/* Main container */}
      <CartSidebar />
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="w-full lg:w-3/4">
          <Card>
            <CardHeader>
              <CardTitle>My Shopping Cart</CardTitle>
            </CardHeader>
            <CardContent>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border-b"
                >
                  {/* Product Image */}
                  <div className="flex items-center">
                  {/* <Image
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 rounded-md object-cover"
                    /> */}
                   <Image src={item.image} alt={item.name} width={80} height={80} />
                    <div className="ml-4">
                      <h3 className="text-md font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">500 GM</p>
                      <p className="text-sm line-through text-gray-400">
                        ₹{item.originalPrice}
                      </p>
                      <p className="text-md text-red-500">₹{item.price}</p>
                    </div>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex items-center">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button className="px-2 py-1">-</button>
                      <span className="px-2">1</span>
                      <button className="px-2 py-1">+</button>
                    </div>
                    <button className="ml-4 text-red-500">Remove</button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Cart Summary Section */}
        <div className="w-full lg:w-1/4">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Cart Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between py-2">
                <span>Item Total</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Customize</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between py-2 text-green-500">
                <span>Discount</span>
                <span>₹0.00</span>
              </div>
              <div className="flex justify-between py-2 font-bold">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="mt-4">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Proceed to Checkout
                </Button>
              </div>
              <div className="mt-4 text-center text-gray-600">
                We accept all major cards
                <div className="flex justify-center space-x-2 mt-2">
                  {/* <Image src="/images/visa.png" alt="Visa" className="w-8 h-8" />
                  <Image src="/images/mastercard.png" alt="Mastercard" className="w-8 h-8" />
                  <Image src="/images/paypal.png" alt="Paypal" className="w-8 h-8" /> */}
                  <Image src="/logo/organic.png" alt="Visa" width={32} height={32} />
                  <Image src="/logo/organic.png" alt="Mastercard" width={32} height={32} />
                  <Image src="/logo/organic.png" alt="Paypal" width={32} height={32} />
                    
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
