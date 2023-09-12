import HomeHero from '@/components/features/homepage/HomeHero';
import HowToOptimize from '@/components/features/homepage/HowToOptimize';
import NewRenderingStrategies from '@/components/features/homepage/NewRenderingStrategies';
import RenderingStategies from '@/components/features/homepage/RenderingStategies';
import WhatsMore from '@/components/features/homepage/WhatsMore';

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <RenderingStategies />
      <NewRenderingStrategies />
      <HowToOptimize />
      <WhatsMore />
    </main>
  );
}
