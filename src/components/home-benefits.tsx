"use client";
import React from "react";
import LetterPullup from "./magicui/letter-pullup";
import Image from "next/image";

export default function Home_Benefits() {
  const ragiBenefits = [
    {
      title: "Diabetes Management",
      description:
        "Ragi's low glycemic index and high fiber content help regulate blood sugar and cholesterol levels.",
      img: "/logo/diabetes.png"
    },
    {
      title: "Weight Loss",
      description:
        "Ragi is high in fiber and low in calories, which helps you feel full longer and lose weight.",
      img: "/logo/weight-loss.png"
    },
    {
      title: "Bone Health",
      description:
        "Ragi is high in calcium and iron, which helps strengthen bones and teeth.",
      img: "/logo/bone-health.png"
    },
    {
      title: "Gluten-Free",
      description: "Ragi is a nutritious cereal that's gluten-free.",
      img: "/logo/gluten-free2.png"
    },
    {
      title: "Protein",
      description:
        "Ragi is a natural source of protein, which helps with muscle growth and repair.",
      img: "/logo/protein.png"
    },
    {
      title: "Digestion",
      description: "Ragi improves digestion.",
      img: "/logo/digestion.png"
    },
    {
      title: "Skin Health",
      description: "Ragi may prevent skin damage and improve skin hydration.",
      img: "/logo/skin-health.png"
    },
    {
      title: "Hair Growth",
      description: "Ragi may boost hair growth.",
      img: "/logo/hair-growth.png"
    },
    {
      title: "Immunity",
      description: "Ragi may boost immunity.",
      img: "/logo/immune-booster.png"
    },
    {
      title: "Heart Health",
      description: "Ragi may support heart health.",
      img: "/logo/heart-health.png"
    },
    {
      title: "Cancer Prevention",
      description: "Ragi may reduce the risk of cancer.",
      img: "/logo/cancer.png"
    },
    {
      title: "Detoxification",
      description: "Ragi may aid in detoxification.",
      img: "/logo/detoxification.png"
    }
  ];

  return (
    <>
      <div className="mt-8 flex flex-col items-center justify-center md:p-8">
        {/* <h1 className="text-2xl font-bold w-full">Your Products </h1> */}
        <LetterPullup
          words={"Ragi Benfits"}
          className="font-serif text-red-500"
          delay={0.2}
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-1 md:p-5">
          {ragiBenefits.map((note, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-green-100 "
            >
              <div className="mb-4">
                <Image
                  src={note.img}
                  alt="Ragi"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
              <p className="text-gray-600 hidden md:flex">{note.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
