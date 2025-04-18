import { NextResponse } from 'next/server';
import { getHeroContent } from '@/app/lib/firestore';

export async function GET() {
  try {
    const heroContent = await getHeroContent();
    return NextResponse.json(heroContent);
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hero content' },
      { status: 500 }
    );
  }
} 