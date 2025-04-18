import { NextResponse } from 'next/server';
import { getFeaturedProducts } from '@/app/lib/firestore';

export async function GET() {
  try {
    const featuredProducts = await getFeaturedProducts();
    return NextResponse.json(featuredProducts);
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch featured products' },
      { status: 500 }
    );
  }
} 