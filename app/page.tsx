import HomeHero from '@/components/HomeHero';
import HomeSections from '@/components/HomeSections';

export default async function Home() {
  return (
    <main
      className="flex flex-col items-center p-24"
      style={{ minHeight: 'calc(100vh - 126px)' }}
    >
      <HomeHero />

      <HomeSections />
    </main>
  );
}
