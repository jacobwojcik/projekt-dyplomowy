import type { Database } from './supabase';

export type Product = Database['public']['Tables']['product']['Row'];
