'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Loading from '../components/Loading';

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

export default function WallpapersPage() {
  const [productPacks, setProductPacks] = useState<ProductPack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductPacks = async () => {
      try {
        const response = await fetch('/api/packs');
        if (!response.ok) {
          console.warn('No product packs available');
          setProductPacks([]);
        } else {
          const data = await response.json();
          if (!Array.isArray(data)) {
            console.warn('Invalid product packs data format');
            setProductPacks([]);
          } else {
            // Ensure all required fields are present and properly formatted
            const validatedPacks = data.map(pack => ({
              ...pack,
              price: typeof pack.price === 'number' ? pack.price : 0,
              description: pack.description || '',
              images: Array.isArray(pack.images) ? pack.images : [],
              thumbnail: pack.thumbnail || { src: '', alt: '' }
            }));
            setProductPacks(validatedPacks);
          }
        }
      } catch (error) {
        console.error('Error fetching product packs:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProductPacks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  if (!productPacks.length) {
    return <div>No wallpaper packs available</div>;
  }

  return (
    <div className="py-12 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Wallpaper Packs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productPacks.map((pack) => (
            <Link 
              key={pack.id} 
              href={`/wallpapers/${pack.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={pack.thumbnail.src}
                    alt={pack.thumbnail.alt || pack.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {pack.title}
                  </h2>
                  <p className="text-gray-600 mt-2 line-clamp-2">{pack.description}</p>
                  <p className="text-blue-600 font-semibold mt-4">
                    ${typeof pack.price === 'number' ? pack.price.toFixed(2) : '0.00'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 