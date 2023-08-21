import { Suspense } from 'react';

import ProductListLoader from '@/components/features/loaders/ProductListLoader';
import SideDescription from '@/components/SideDescription';
import BlogPosts from '@/components/Streaming/BlogPostsStreaming';
import CurrentTime from '@/components/Streaming/CurrentTime';
import ProductsStreaming from '@/components/Streaming/ProductsStreaming';
import ProductsStreamingLong from '@/components/Streaming/ProductsStreamingLong';
import { Separator } from '@/components/ui/Separator';
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
          <Separator />
          <Suspense fallback={<ProductListLoader />}>
            <ProductsStreamingLong />
          </Suspense>
          <Separator />
          <Suspense>
            <ProductsStreaming />
          </Suspense>
        </div>
      </div>

      <Suspense>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
