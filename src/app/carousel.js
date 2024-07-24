"use client";

import { useState } from 'react';

export default function Carousel() {
    const photos = [
      '/drone-over-cliffs.JPG',
      '/misty-woods.JPG',
      '/drone-over-meeting.JPG',
      '/dylan-adam-signup.JPG',
      '/andrew-speaking.JPG',
      '/andrew-tom-connor.JPG',
      '/douglas-back.JPG',
      '/dylan-guitar.JPG',
      '/john-12-12.JPG',
      '/jump-crew.JPG',
      '/aaron-spire-flip.jpeg',
      '/brothers.png',
      '/zach-the-big.png',
      '/mickey-cooking.JPG',
      '/z-a-stepwork.JPG',
      '/night-fire-meeting.JPG',
      '/night-meeting.JPG',
      '/rooftops.JPG',
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
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 z-10">
        <button
          onClick={prevSlide}
          className="bg-white text-black p-4 rounded-full transition-transform transform hover:scale-105 hover:translate-y-[-2px]"
          style={{ boxShadow: '0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 32px 32px hsl(0deg 0% 0% / 0.075)' }}
        >
          &#10094;
        </button>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="min-w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <img src={photo} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-10">
        <button
          onClick={nextSlide}
          className="bg-white text-black p-4 rounded-full transition-transform transform hover:scale-105 hover:translate-y-[-2px]"
          style={{ boxShadow: '0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 32px 32px hsl(0deg 0% 0% / 0.075)' }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};