import RenderingPage from '@/components/RenderingPage';
import { renderingStrategiesInfo } from '@/lib/consts/renderingStrategiesInfo';
import { getBlogPosts, getProducts } from '@/lib/queries';
import { getCurrentTime } from '@/lib/utils';

export const dynamic = 'force-static';

export default async function Page() {
  const [products, currentTime, blogPosts] = await Promise.all([
    getProducts(),
    getCurrentTime({ cache: 'force-cache' }),
    getBlogPosts(),
  ]);

  return (
    <RenderingPage
      information={renderingStrategiesInfo.ssg}
      products={products}
      currentTime={currentTime}
      blogPosts={blogPosts}
    />
  );
}
