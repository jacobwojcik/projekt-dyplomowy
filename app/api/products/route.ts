import { NextResponse } from 'next/server';

import { getProducts } from '@/lib/queries';

export async function GET(_req: Request) {
  try {
    const res = await getProducts();

    return NextResponse.json(res);
  } catch (e) {
    return NextResponse.json({
      success: false,
      error:
        e instanceof Error
          ? e.message
          : 'Something went wrong. Please try again later.',
    });
  }
}
