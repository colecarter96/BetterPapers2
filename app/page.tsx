'use client';

import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Loading from './components/Loading';

interface HeroContent {
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

interface FeaturedProduct {
  id: string;
  image: {
    src: string;
    alt?: string;
  };
  title: string;
  price: number;
  productId: string;
  order: number;
}

export default function Home() {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch hero content
        const heroResponse = await fetch('/api/hero');
        if (!heroResponse.ok) {
          console.warn('No hero content available');
          setHeroContent(null);
        } else {
          const heroData = await heroResponse.json();
          setHeroContent(heroData);
        }
        
        // Fetch featured products
        const featuredResponse = await fetch('/api/featured');
        if (!featuredResponse.ok) {
          console.warn('No featured products available');
          setFeaturedProducts([]);
        } else {
          const featuredData = await featuredResponse.json();
          if (!Array.isArray(featuredData)) {
            console.warn('Invalid featured products data format');
            setFeaturedProducts([]);
          } else {
            setFeaturedProducts(featuredData);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  return (
    <div className="">
      {heroContent && heroContent.image && (
        <Hero 
          image={heroContent.image.src}
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          ctaText={heroContent.ctaText}
          ctaLink={heroContent.ctaLink}
        />
      )}
      
      <Testimonial />
      <About />
      
      <div className="block md:hidden py-10 flex flex-col items-center">
        <Carousel 
          images={featuredProducts.map(product => product.image.src)} 
          interval={4000} 
          width={80} 
          containerBased={true}
        />
        <h3 className="text-center text-xl pt-2 font-bold">Featured Designs</h3>
      </div>

      <div className="hidden md:block py-10 flex justify-center">
        <Carousel 
          images={featuredProducts.map(product => product.image.src)} 
          interval={4000} 
          width={50} 
          containerBased={true}
        />
      </div>
    </div>
  );
}
