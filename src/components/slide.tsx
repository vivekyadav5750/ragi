"use client";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// import Image from "next/image";
// import ragi4 from "../public/ragi4.jpeg";

const Example = () => {
  const images = [
    "images/ragi13.webp",
    "images/ragi11.webp",
    "images/ragi14.webp",
  ];

  return (
    <div className="mt-20 ">
      <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }} className="rounded-2xl">
          {/* <Image src="/ragi4.jpeg" alt="Ragi" width={500} height={500} /> */}
          {/* <span>Slide 1</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }} className="rounded-2xl">
          {/* <span>Slide 2</span> */}
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }} className="rounded-2xl">
          {/* <span>Slide 3</span> */}
        </div>
      </div>
    </Slide>
    </div>
  );
};

export default Example;
