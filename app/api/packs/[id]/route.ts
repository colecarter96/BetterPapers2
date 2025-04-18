// import { NextRequest, NextResponse } from 'next/server';
// import { getProductPackById } from '@/app/lib/firestore';

// export async function GET(
//   request: NextRequest,
//   context: { params: { id: string } }
// ): Promise<NextResponse> {
//   try {
//     const productPack = await getProductPackById(context.params.id);
    
//     if (!productPack) {
//       return NextResponse.json(
//         { error: 'Product pack not found' },
//         { status: 404 }
//       );
//     }
    
//     return NextResponse.json(productPack);
//   } catch (error) {
//     console.error('Error fetching product pack:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch product pack' },
//       { status: 500 }
//     );
//   }
// } 

import { NextRequest, NextResponse } from 'next/server';
import { getProductPackById } from '@/app/lib/firestore';
import type { NextApiResponse } from 'next';
import type { NextRequest as NextServerRequest } from 'next/server';
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const productPack = await getProductPackById(params.id);

    if (!productPack) {
      return NextResponse.json({ error: 'Product pack not found' }, { status: 404 });
    }

    return NextResponse.json(productPack);
  } catch (error) {
    console.error('Error fetching product pack:', error);
    return NextResponse.json({ error: 'Failed to fetch product pack' }, { status: 500 });
  }
}

