import IsrCodeBlock from '@/components/features/rendering/IsrCodeBlock';
import RenderingPage from '@/components/features/rendering/RenderingPage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { renderingStrategiesInfo } from '@/lib/consts/renderingStrategiesInfo';
import { getBlogPosts, getProducts } from '@/lib/queries';
import { getCurrentTime } from '@/lib/utils';

export const revalidate = 30;

export default async function Page() {
  const [products, currentTime, blogPosts] = await Promise.all([
    getProducts(),
    getCurrentTime({
      next: {
        revalidate: 30,
      },
    }),
    getBlogPosts(),
  ]);

  return (
    <RenderingPage
      information={renderingStrategiesInfo.isr}
      products={products}
      currentTime={currentTime}
      blogPosts={blogPosts}
      navOptions={{
        prevHref: '/renderowanie/ssg',
        prevName: 'Static Site Generation (SSG)',
        nextHref: '/',
        nextName: 'Wróć na stronę główną',
      }}
    >
      <IsrCodeBlock />
    </RenderingPage>
  );
}
