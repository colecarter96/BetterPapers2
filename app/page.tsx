import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import ImageCarousel from "./components/Carousel";

const images = [
  'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
  'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
  'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
  'https://i.postimg.cc/GmjPjg63/Untitled-design-7.png',
];


export default function Home() {
  return (
    <div className="">
      <Hero />
      <Testimonial />
    
      <About />
      <div className="py-10">
        <ImageCarousel images={images} interval={4000} height="h-[50vh]" />
      </div>
    </div>
  );
}
