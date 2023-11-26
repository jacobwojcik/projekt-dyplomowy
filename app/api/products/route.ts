import "server-only";
import { NextResponse } from 'next/server';
import { cookies } from "next/headers";

import { getProducts } from '@/lib/queries';

export async function GET(request: Request) {
  // Refresh cookie to force next dynamic behaviour 
  cookies();

  try {

    const searchParams = request.url ? new URL(request.url).searchParams : null;
    const from = searchParams ? +(searchParams.get('from') ?? 0) : 0;
    const limit = searchParams ? +(searchParams.get('limit') ?? 8) : 8;
    const sort = searchParams?.get('sort') ?? undefined;
    const category = searchParams?.get('category') ?? undefined;

    const res = await getProducts(limit, from, sort, category);

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
