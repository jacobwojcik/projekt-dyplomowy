import { Suspense } from 'react';

import ProductListLoader from '@/components/features/loaders/ProductListLoader';
import SideDescription from '@/components/SideDescription';
import BlogPosts from '@/components/Streaming/BlogPostsStreaming';
import CurrentTime from '@/components/Streaming/CurrentTime';
import ProductsStreaming from '@/components/Streaming/ProductsStreaming';
import ProductsStreamingLong from '@/components/Streaming/ProductsStreamingLong';
import { Separator } from '@/components/ui/Separator';
import { nextFeaturesInfo } from '@/lib/consts/renderingStrategiesInfo';

export default async function Page() {
  return (
    <div className="mx-auto my-6 max-w-7xl">
      <div className="mx-6 flex flex-col gap-8 lg:flex-row xl:mx-0">
        <SideDescription information={nextFeaturesInfo.streaming} />
        <div>
          <Suspense>
            <CurrentTime />
          </Suspense>
          <Separator />
          <Suspense fallback={<ProductListLoader />}>
            <ProductsStreaming />
          </Suspense>
          <Separator />
          <Suspense fallback={<ProductListLoader />}>
            <ProductsStreamingLong />
          </Suspense>
        </div>
      </div>

      <Suspense>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
