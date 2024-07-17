"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
export default function CarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/carousel/CarAio1.png",
      alt: "Slide 1",
      href: "/product/cooler",
      text: "Cooler",
    },
    {
      src: "/carousel/CarCase1.png",
      alt: "Slide 2",
      href: "/product/case",
      text: "Case",
    },
    {
      src: "/carousel/CarHs1.png",
      alt: "Slide 3",
      href: "/product/headset",
      text: "Headset",
    },
    {
      src: "/carousel/CarKey1.png",
      alt: "Slide 4",
      href: "/product/keyboard",
      text: "Keyboard",
    },
    {
      src: "/carousel/CarMoni1.png",
      alt: "Slide 5",
      href: "/product/monitor",
      text: "Monitor",
    },
    {
      src: "/carousel/CarMos1.png",
      alt: "Slide 6",
      href: "/product/mouse",
      text: "Mouse",
    },
    {
      src: "/carousel/CarMpd1.png",
      alt: "Slide 7",
      href: "/product/mousepad",
      text: "Mousepad",
    },
    {
      src: "/carousel/CarRam1.png",
      alt: "Slide 8",
      href: "/product/ram",
      text: "Ram",
    },
    {
      src: "/carousel/CarUsb1.png",
      alt: "Slide 9",
      href: "/product/accessories",
      text: "USB Port",
    },
    {
      src: "/carousel/CarVga1.png",
      alt: "Slide 10",
      href: "/product/vga",
      text: "VGA CARD",
    },
  ];

  const totalSlides = slides.length;
  const slidesToShow = 5;

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - slidesToShow : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - slidesToShow ? 0 : prevSlide + 1
    );
  };

  const displayedSlides = slides.slice(
    currentSlide,
    currentSlide + slidesToShow
  );

  return (
    <div className="carousel w-full relative overflow-hidden">
      <div className="flex gap-4 mx-auto">
        {displayedSlides.map((slide, index) => (
          <div key={index}>
            <div  className="carousel-item  relative w-[250px]">
              <Link href={slide.href}>
                <img src={slide.src} className="w-full" alt={slide.alt} />
              </Link>
            </div>
            <h1 className="text-center ">{slide.text}</h1>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 transform cursor-pointer -translate-y-1/2 flex justify-between w-full px-4">
        <button onClick={handlePrevClick} className="btn btn-circle">
          ❮
        </button>
        <button onClick={handleNextClick} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}
