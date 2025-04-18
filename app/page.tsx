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
          console.log('Featured products data:', featuredData);
          if (!Array.isArray(featuredData)) {
            console.warn('Invalid featured products data format:', featuredData);
            setFeaturedProducts([]);
          } else {
            console.log('Setting featured products:', featuredData);
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
      
      {featuredProducts.length > 0 && (
        <div className="py-10">
          <div className="w-full max-w-4xl mx-auto">
            <Carousel 
              images={featuredProducts.map(product => product.image.src)}
              interval={5000}
              width={100}
              containerBased={true}
            />
            {/* <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="text-center">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
