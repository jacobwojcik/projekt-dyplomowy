import { Suspense } from 'react';

import ProductListLoader from '@/components/features/loaders/ProductListLoader';
import SideDescription from '@/components/features/rendering/SideDescription';
import BlogPosts from '@/components/features/streaming/BlogPostsStreaming';
import CurrentTime from '@/components/features/streaming/CurrentTime';
import ProductsStreaming from '@/components/features/streaming/ProductsStreaming';
import ProductsStreamingLong from '@/components/features/streaming/ProductsStreamingLong';
import { Separator } from '@/components/ui/Separator';
import { nextFeaturesInfo } from '@/lib/consts/renderingStrategiesInfo';
import SectionNavigation from '@/components/shared/SectionNavigation';

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
      <div className="w-full">
        <SectionNavigation
          navOptions={{
            nextHref: '/rewalidacja',
            nextName: 'Rewalidacja',
            prevHref: '/',
            prevName: 'Wróć na stronę główną',
          }}
        />
      </div>
    </div>
  );
}
