import HomeHero from '@/components/homepage/HomeHero';
import HowToOptimize from '@/components/homepage/HowToOptimize';
import RenderingStategies from '@/components/homepage/RenderingStategies';
import WhatsMore from '@/components/homepage/WhatsMore';

export default async function Home() {
  return (
    <main>
      <HomeHero />
      <RenderingStategies />
      <HowToOptimize />
      <WhatsMore />
    </main>
  );
}
