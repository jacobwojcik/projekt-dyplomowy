import { Database } from '@/types/supabase';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key is missing in environment variables.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
