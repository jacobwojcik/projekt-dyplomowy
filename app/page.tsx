import HomeHero from '@/components/HomeHero';
import HowToOptimize from '@/components/HowToOptimize';
import RenderingStategies from '@/components/RenderingStategies';

export default async function Home() {
  return (
    <main style={{ minHeight: 'calc(100vh - 126px)' }}>
      <HomeHero />
      <RenderingStategies />]
      <HowToOptimize />
    </main>
  );
}
