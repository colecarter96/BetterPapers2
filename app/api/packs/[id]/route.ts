import { NextRequest, NextResponse } from 'next/server';
import { getProductPackById } from '@/app/lib/firestore';

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(
  request: NextRequest,
  { params }: RouteContext
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