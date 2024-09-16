"use client";
import React from "react";
import LetterPullup from "./magicui/letter-pullup";
import Image from "next/image";

export default function Home_Benefits() {
  const Benefits_Items = [
    {
      img: "/images/ragi1.jpg",
      title: "A Powerhouse of Iron, Calcium, and Protein",
      description:
        "Ragi, or finger millet, is an excellent source of iron, calcium, and protein. It is particularly beneficial for combating iron and calcium deficiencies, supporting overall health and wellness. "
    },
    {
      img: "/images/ragi6.webp",
      title: "Ragi is a great source of calcium",
      description:
        "Ragi is a great source of calcium and is a great food for those with calcium deficiency. It is also a great source of iron and is a great food for those with iron deficiency."
    },
    {
      img: "/images/ragi5.jpg",
      title: "Ragi is a great source of protein",
      description:
        "Ragi is a great source of protein and is a great food for those with protein deficiency. It is also a great source of iron and is a great food for those with iron deficiency."
    }
  ];

  return (
    <>
      <div className="mt-16 flex flex-col items-center justify-center ">
        {/* <h1 className="text-2xl font-bold w-full">Your Products </h1> */}
        <LetterPullup words={"Ragi Benefits"} className="font-mono" delay={0.2} />

        <div className="flex -mt-2 ">
          {/* for small screen show in row wise single image , for medium show grid wise  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {Benefits_Items.map((item, index) => (
              <div key={index} className="bg-green- p-4 rounded-lg space-y-1">
                <Image src={item.img} alt="Ragi" width={500} height={300} className="rounded-xl"/>
                <h1 className="text-lg font-bold">{item.title}</h1>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
