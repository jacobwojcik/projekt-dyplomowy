import type { ProductInfo } from '@/types';

import { createSupabaseClient } from '../utils';

export const getProducts = async (
  limit = 8,
  from = 0,
): Promise<ProductInfo[]> => {
  const supabase = createSupabaseClient();

  const { data: products } = await supabase
    .from('product')
    .select('*, category(name)')
    .range(from, from + limit - 1)
    .returns<ProductInfo[]>();

  return products ?? [];
};
