import type { ProductInfo } from '@/types';

import { createSupabaseClient } from '../utils';

export const getProducts = async (limit = 8): Promise<ProductInfo[]> => {
  const supabase = createSupabaseClient();

  const { data: products } = await supabase
    .from('product')
    .select('*, category(name)')
    .limit(limit)
    .returns<ProductInfo[]>();

  return products ?? [];
};
