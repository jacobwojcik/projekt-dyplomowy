import RenderingPage from '@/components/features/rendering/RenderingPage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { renderingStrategiesInfo } from '@/lib/consts/renderingStrategiesInfo';
import { getBlogPosts, getProducts } from '@/lib/queries';
import { getCurrentTime } from '@/lib/utils';

export default async function Page() {
  const [products, currentTime, blogPosts] = await Promise.all([
    getProducts(),
    getCurrentTime({ cache: 'no-cache' }),
    getBlogPosts(),
  ]);

  return (
    <RenderingPage
      information={renderingStrategiesInfo.ssr}
      products={products}
      currentTime={currentTime}
      blogPosts={blogPosts}
    >
      <>
        <span className="mb-2">Zobacz także:</span>
        <ButtonLink href={`/streaming`}>Streaming + Suspense</ButtonLink>
      </>
    </RenderingPage>
  );
}
