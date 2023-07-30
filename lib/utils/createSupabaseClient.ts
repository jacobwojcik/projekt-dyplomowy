import { Database } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';

export const supabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or key is missing in environment variables.');
  }
  const supabase = createClient<Database>(supabaseUrl, supabaseKey,  {
    auth: { persistSession: false },
  });
  return supabase;
};
