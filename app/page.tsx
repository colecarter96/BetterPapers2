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
      <div className="md:hidden py-10 flex flex-col items-center">
        <ImageCarousel images={images} interval={4000} width={80} />
        <h3 className="text-center text-xl pt-2 font-bold">Featured Designs</h3>
      </div>

      <div className="hidden md:flex md:justify-center py-10">
        <ImageCarousel images={images} interval={4000} width={50} />
      </div>
    </div>
  );
}
