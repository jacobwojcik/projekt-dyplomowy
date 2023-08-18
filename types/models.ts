import type { Database } from './supabase';

export type Product = Database['public']['Tables']['product']['Row'];
export type Category = Database['public']['Tables']['category']['Row'];
export type Todo = Database['public']['Tables']['todo']['Row'];
export type TodoCategory = Database['public']['Enums']['category_todo'];
export type ProductInfo = Product & {
  category: { name: string };
};
export type BlogPost = Database['public']['Tables']['blog_post']['Row'];

export interface Time {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: true;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export interface RenderingStrategiesInfo {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
}

export enum TodoCategoryEnum {
  Private = 'Prywatne',
  Work = 'Praca',
  Health = 'Zdrowie',
  Travel = 'Podróże',
}
