"use client";

import { useState } from "react";

export default function Carousel() {
  const photos = [
    '/drone-over-cliffs.JPG',
    '/misty-woods.JPG',
    '/andrew-rocknroll.JPG',
    '/Darryl-oldtimer.JPG',
    '/drone-over-meeting.JPG',
    '/dylan-adam-signup.JPG',
    '/andrew-speaking.JPG',
    '/andrew-tom-connor.JPG',
    '/douglas-back.JPG',
    '/alley-p.JPG',
    '/dylan-guitar.JPG',
    '/jay-fishin.jpeg',
    '/riv.jpeg',
    '/back-fishin.jpg',
    '/wide-river.jpg',
    '/drone-climbing-over.jpg',
    '/climbing-below.jpg',
    '/jump-crew.JPG',
    '/aaron-spire-flip.jpeg',
    '/brothers.png',
    '/zach-the-big.png',
    '/mickey-cooking.JPG',
    '/zach-speaker.JPG',
    '/john-mike.JPG',
    '/DylanH-Jay.JPG',
    '/z-a-stepwork.JPG',
    '/grubbin.JPG',
    '/night-fire-meeting.JPG',
    '/sunset-tent-vibes.jpg',
    '/sean-eating.JPG',
    '/slurms-mckenzie.JPG',
    '/sunny-boys.JPG',
    '/sunrise.JPG',
    '/tyler-meeting.JPG',
    '/z-a-reading.JPG'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl shadow-md bg-white">
      {/* Fixed-height container for stable button positioning */}
      <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden rounded-2xl">
        {/* Image */}
        <img
          src={photos[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="max-h-full max-w-full object-contain transition-all duration-500 ease-in-out"
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-white text-gray-800 p-3 rounded-full shadow-md hover:scale-105 transition"
        >
          &#10094;
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-white text-gray-800 p-3 rounded-full shadow-md hover:scale-105 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 py-4 overflow-x-auto px-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#ffb347]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}