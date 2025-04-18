'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  interval?: number;
  width?: number; // in vw units or percentage of container
  containerBased?: boolean;
}

const Carousel = ({ images, interval = 3000, width = 100, containerBased = false }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Only start the carousel after hydration is complete
  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Start the timer only after mounting
  useEffect(() => {
    if (isMounted) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isMounted, images.length, interval]);

  const containerStyle = containerBased 
    ? { width: '100%', maxWidth: `${width}%` }
    : { width: `${width}vw` };

  // Initial render matches server exactly
  const initialRender = (
    <div 
      style={{ 
        ...containerStyle,
        height: containerBased ? 'auto' : `${width}vw`,
        aspectRatio: '1/1',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto'
      }}
    >
      <img
        src={images[0]}
        alt="Carousel image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </div>
  );

  if (!isMounted) {
    return initialRender;
  }

  return (
    <div 
      style={{ 
        ...containerStyle,
        height: containerBased ? 'auto' : `${width}vw`,
        aspectRatio: '1/1',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto'
      }}
    >
      {images.map((image, index) => (
        <div
          key={`carousel-${index}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <img
            src={image}
            alt={`Carousel image ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2"
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};

export default Carousel;
