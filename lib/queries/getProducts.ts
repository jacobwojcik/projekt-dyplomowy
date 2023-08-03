import type { ProductInfo } from '@/types';

import { createSupabaseClient } from '../utils';

export const getProducts = async (): Promise<ProductInfo[]> => {
  const supabase = createSupabaseClient();

  const { data: products } = await supabase
    .from('product')
    .select('*, category(name)')
    .returns<ProductInfo[]>();

  return products ?? [];
};
