import HomeHero from '@/components/HomeHero';
import HomeSections from '@/components/HomeSections';
import { supabase } from '@/lib/utils';

export default async function Home() {
  const { data: countries } = await supabase().from('countries').select();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <HomeHero />

      <HomeSections />

      <div>
        {/* Test database */}
        <span>{JSON.stringify(countries)}</span>
      </div>
    </main>
  );
}
