import type { Product } from '@/types';

import { createSupabaseClient } from '../utils';

export const getProducts = async () => {
  const supabase = createSupabaseClient();

  const { data: products } = await supabase
    .from('product')
    .select('*')
    .returns<Product[]>();

  return products ?? [];
};
