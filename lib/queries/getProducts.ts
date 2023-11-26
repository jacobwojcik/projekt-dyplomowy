import type { ProductInfo } from '@/types';
import { supabase } from '../utils';



export const getProducts = async (
  limit = 8,
  from = 0,
  sort?: string, 
  category?: string
): Promise<ProductInfo[]> => {
  
  const { data: products } =  await supabase
    .from('product')
    .select('*, category!inner(name)')
    .range(from, from + limit - 1)
    .order('price', { ascending: sort === 'asc' })
    .eq('category.name', category || '') 
    .returns<ProductInfo[]>();
  
    return products ?? [];
};
