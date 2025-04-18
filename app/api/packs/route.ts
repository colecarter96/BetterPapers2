import { NextResponse } from 'next/server';
import { getAllProductPacks } from '@/app/lib/firestore';

export async function GET() {
  try {
    console.log('Fetching product packs...');
    const packs = await getAllProductPacks();
    console.log('Fetched packs:', packs);
    
    if (!packs || packs.length === 0) {
      console.log('No packs found in Firestore');
      return NextResponse.json([], { status: 200 });
    }
    
    return NextResponse.json(packs);
  } catch (error) {
    console.error('Error in packs API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product packs' },
      { status: 500 }
    );
  }
} 