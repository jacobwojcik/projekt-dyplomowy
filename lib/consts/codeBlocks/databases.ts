export const initDb = `import { Database } from '@/types/supabase'; // interfejs z typami określającymi dane w bazie
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL or key is missing in environment variables.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
`




export const exampleRouteHandler = `import { NextResponse } from 'next/server';
import { supabase } from '@/lib/utils';

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const from = searchParams.get('from');
  const limit = searchParams.get('limit');


  // Pobranie danych z bazy 
  try {
    const { data: products } = await supabase
    .from('product')
    .select('*, category(name)')
    .range(from, from + limit - 1)

    return NextResponse.json(products);
  } catch (e) {
    return NextResponse.json({
      success: false,
      error:
        e instanceof Error
          ? e.message
          : 'Something went wrong. Please try again later.',
    });
  }
}`


export const componentDbCall = `export default function Page() {
  const data = await supabase.from('products').select('*');

  return (
    <section>
      {data}
    </section>
`
