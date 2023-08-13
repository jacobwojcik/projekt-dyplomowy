import type { Category } from '@/types';

import { createSupabaseClient } from '../utils';

export const getCategories = async (): Promise<Category[]> => {
  const supabase = createSupabaseClient();

  const { data: categories } = await supabase
    .from('category')
    .select('*')
    .returns<Category[]>();

  return categories ?? [];
};
