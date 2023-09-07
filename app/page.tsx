import HomeHero from '@/components/homepage/HomeHero';
import HowToOptimize from '@/components/homepage/HowToOptimize';
import NewRenderingStrategies from '@/components/homepage/NewRenderingStrategies';
import RenderingStategies from '@/components/homepage/RenderingStategies';
import WhatsMore from '@/components/homepage/WhatsMore';

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
