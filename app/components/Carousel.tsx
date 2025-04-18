'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  height?: string; // e.g. "h-64", "h-[400px]"
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000,
  height = 'h-[60vh]', // default height
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [current, interval]);

  return (
    <div className="relative mx-auto aspect-square overflow-hidden h-[60vh] w-auto">
        <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
            transform: `translateX(-${current * 60}vh)`,
            width: `${images.length * 60}vh`,
            }}
        >
            {images.map((img, idx) => (
            <img
                key={idx}
                src={img}
                alt={`Slide ${idx}`}
                className="w-auto h-[60vh] object-contain"
            />
            ))}
        </div>

        {/* Arrows */}
        <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
        >
            <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
        >
            <ChevronRight className="w-6 h-6 text-black" />
        </button>
    </div>

  );
};

export default ImageCarousel;
