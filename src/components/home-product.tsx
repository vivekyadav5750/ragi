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
      img: "/images/ragi_cake.jpg",
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
      <div className="mt-16 flex flex-col items-center justify-center ">
        <LetterPullup words={"Ragi Products"} className="font-mono" delay={0.2} />

        <div className="flex -mt-2 ">
          {/* for small screen show in row wise single image , for medium show grid wise  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {Products.map((item, index) => (
              <div key={index} className="bg-gray- p-4 rounded-lg space-y-1 text-center">
                <Image src={item.img} alt="Ragi" width={500} height={300}  className="rounded-xl"/>
                <h1 className="text-lg font-mono font-bold ">{item.title}  </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
