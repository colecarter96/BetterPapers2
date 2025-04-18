'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Loading from '@/app/components/Loading';
import Carousel from '@/app/components/Carousel';

interface ProductPack {
  id: string;
  title: string;
  description: string;
  price: number;
  images: {
    src: string;
    alt?: string;
  }[];
  thumbnail: {
    src: string;
    alt?: string;
  };
  featured?: boolean;
}

export default function ProductPage() {
  const params = useParams();
  const [productPack, setProductPack] = useState<ProductPack | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/packs/${params.id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProductPack(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  if (!productPack) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-3 md:px-4 lg:px-4 py-12">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
          {/* Carousel */}
          <div className="w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-[-1rem]">
            <div className="block md:hidden">
              <Carousel 
                images={productPack.images.map(img => img.src)} 
                interval={4000} 
                width={100} 
                containerBased={true} 
              />
            </div>
            <div className="hidden md:block lg:hidden">
              <Carousel 
                images={productPack.images.map(img => img.src)} 
                interval={4000} 
                width={100} 
                containerBased={true} 
              />
            </div>
            <div className="hidden lg:block">
              <Carousel 
                images={productPack.images.map(img => img.src)} 
                interval={4000} 
                width={100} 
                containerBased={true} 
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center max-w-md mx-auto lg:mx-0 lg:ml-[-0.5rem]">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{productPack.title}</h1>
              <p className="text-2xl font-medium text-blue-500">${productPack.price.toFixed(2)}</p>
            </div>
            
            <p className="text-gray-600 mb-8">{productPack.description}</p>
            
            <button className="bg-gray-900 text-white py-3 px-6 rounded-none mb-8 hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 