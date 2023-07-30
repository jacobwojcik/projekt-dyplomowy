import Image from 'next/image';

import { supabase } from '@/lib/utils';

export default async function Home() {
  const { data: countries } = await supabase().from('countries').select();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>{JSON.stringify(countries)}</span>
    </main>
  );
}
