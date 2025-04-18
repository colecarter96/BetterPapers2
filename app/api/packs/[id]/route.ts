import { NextRequest, NextResponse } from 'next/server';
import { getProductPackById } from '@/app/lib/firestore';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const productPack = await getProductPackById(params.id);
    
    if (!productPack) {
      return NextResponse.json(
        { error: 'Product pack not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(productPack);
  } catch (error) {
    console.error('Error fetching product pack:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product pack' },
      { status: 500 }
    );
  }
} 