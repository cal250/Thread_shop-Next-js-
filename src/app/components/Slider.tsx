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
            className={`flex-shrink-0 w-full h-full ${slide.bg} flex items-center justify-between p-8`}
          >
            {/* TEXTCONTAINER */}
            <div className="max-w-md">
              <h2 className="text-2xl font-bold mb-4">{slide.description}</h2>
              <h1 className="text-4xl font-extrabold mb-6">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="px-6 py-2 bg-black text-white rounded-md">
                  SHOP NOW
                </button>
              </Link>
            </div>

            {/* IMAGECONTAINER */}
            <div className="relative w-[400px] h-[500px]">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
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
