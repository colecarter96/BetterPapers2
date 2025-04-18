import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonial from "./components/Testimonial";


export default function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <Testimonial />
      <About />
    </div>
  );
}
