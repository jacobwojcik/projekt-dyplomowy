import RenderingPage from '@/components/RenderingPage';
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
    >
      <>
        <span className="mb-2">Zobacz także:</span>
        <ButtonLink href={`/rewalidacja`}>
          Rewalidacja statycznych treści
        </ButtonLink>
      </>
    </RenderingPage>
  );
}
