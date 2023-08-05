import { Suspense } from 'react';

import SideDescription from '@/components/SideDescription';
import BlogPosts from '@/components/Streaming/BlogPostsStreaming';
import CurrentTime from '@/components/Streaming/CurrentTime';
import ProductsStreaming from '@/components/Streaming/ProductsStreaming';
import ProductsStreamingLong from '@/components/Streaming/ProductsStreamingLong';
import { renderingStrategiesInfo } from '@/lib/consts/renderingStrategiesInfo';

export default async function Page() {
  return (
    <div className="mx-4 my-6 ">
      <div className="flex gap-8">
        <SideDescription information={renderingStrategiesInfo.ssr} />
        <div>
          <Suspense>
            <CurrentTime />
          </Suspense>
          <Suspense fallback={<span>Loading...</span>}>
            <ProductsStreamingLong limit={2} />
          </Suspense>
          <Suspense>
            <ProductsStreaming limit={2} />
          </Suspense>
        </div>
      </div>

      <Suspense>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
