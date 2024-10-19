'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collection",
    description: "Sale! Up to 50% off",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale Up to 50% Off",
    img: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Winter Sale Collections",
    description: "Sale Up to 50% Off",
    img: "https://images.pexels.com/photos/794064/pexels-photo-794064.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      <div
        className="w-full h-full flex transition-all ease-out duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }} // For slide transition
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            {/* TEXTCONTAINER */}
            <div className="h-1/2 xl:w-1/2 flex items-center justify-center gap-8 flex-col 2xl:gap-12 text-center ">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="px-4 py-3 bg-black text-white rounded-md">
                  SHOP NOW
                </button>
              </Link>
            </div>

            {/* IMAGECONTAINER */}
            <div className="h-1/2 xl:w-1/2 relative">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
