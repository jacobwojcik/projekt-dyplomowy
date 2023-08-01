import type { Database } from './supabase';

export type Product = Database['public']['Tables']['product']['Row'];

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
