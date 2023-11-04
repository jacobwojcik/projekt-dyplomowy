import type { Category } from '@/types';

import { supabase } from '../utils';

export const getCategories = async (): Promise<Category[]> => {

  const { data: categories } = await supabase
    .from('category')
    .select('*')
    .returns<Category[]>();

  return categories ?? [];
};
