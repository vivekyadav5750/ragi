import Image from "next/image";
import React from "react";
import LetterPullup from "./magicui/letter-pullup";

export default function Home_Product() {
  const Products = [
    {
      img: "/images/ragi_flour.jpg",
      title: "Ragi Flour",
      description:
        "Ragi flour is a gluten-free flour that is rich in fiber and protein. It is a great alternative to wheat flour for those who are gluten intolerant or have celiac disease."
    },
    {
      img: "/images/ragi2.jpg",
      title: "Ragi Malt",
      description:
        "Ragi malt is a nutritious and delicious drink made from ragi flour. It is rich in calcium, iron, and other essential nutrients, making it a healthy choice for breakfast or as a snack."
    },
    {
      img: "/images/ragi_cookies.jpg",
      title: "Ragi Cookies",
      description:
        "Ragi cookies are a healthy and tasty snack option made from ragi flour. They are rich in fiber, protein, and other essential nutrients, making them a great choice for those looking for a nutritious snack."
    },
    {
      img: "/images/ragi_cake.jpeg",
      title: "Ragi Cake",
      description:
        "Ragi idli is a healthy and delicious breakfast option made from ragi flour. It is rich in fiber, protein, and other essential nutrients, making it a nutritious choice for breakfast or as a snack."
    },
    {
      img: "/images/ragi_laddu_3.jpg",
      title: "Ragi Ladoo",
      description:
        "Ragi idli is a healthy and delicious breakfast option made from ragi flour. It is rich in fiber, protein, and other essential nutrients, making it a nutritious choice for breakfast or as a snack."
    },
    {
      img: "/images/ragi5.jpg",
      title: "Ragi Namkeen",
      description:
        "Ragi dosa is a healthy and delicious breakfast option made from ragi flour. It is rich in fiber, protein, and other essential nutrients, making it a nutritious choice for breakfast or as a snack."
    }
  ];
  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center md:p-8">
        <LetterPullup
          words={"Ragi Products"}
          className="font-mono text-red-400"
          delay={0.2}
        />

        <div className="flex -mt-2 ">
          {/* for small screen show in row wise single image , for medium show grid wise  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {Products.map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-4 rounded-lg text-center shadow-lg group"
              >
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
                    Shop {item.title}
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-4">
                  <p className="text-gray-500 text-xs">{item.description}</p>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  {/* <p className="text-black font-semibold">{item.price}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
