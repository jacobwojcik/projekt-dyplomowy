import type { ProductInfo } from '@/types';
import { supabase } from '../utils';

export const getProducts = async (
  limit = 8,
  from = 0,
  sort?: string,
  category?: string
): Promise<ProductInfo[]> => {
  const query = supabase
    .from('product')
    .select('*, category!inner(name)')
    .range(from, from + limit - 1)

    .returns<ProductInfo[]>();

  if (category) {
    // @ts-ignore
    query.eq('category.name', category);
  }

  if (sort) {
    query.order('price', { ascending: sort === 'asc' });
  }

  const { data: products } = await query.returns<ProductInfo[]>();
  return products ?? [];
};
