import type { ReactNode } from 'react';

import type {
  BlogPost,
  ProductInfo,
  RenderingStrategiesInfo,
  Time,
} from '@/types';

import BlogPosts from './BlogPosts';
import ProductsList from './ProductsList';
import SideDescription from './SideDescription';

interface Props {
  information: RenderingStrategiesInfo;
  products: ProductInfo[];
  currentTime: Time;
  blogPosts: BlogPost[];
  children?: ReactNode;
}

const RenderingPage = ({
  information,
  products,
  currentTime,
  blogPosts,
  children,
}: Props) => {
  return (
    <div className="my-6">
      <div className="mx-4 flex flex-col gap-8 lg:flex-row">
        <SideDescription information={information}> {children}</SideDescription>
        <ProductsList products={products} currentTime={currentTime} />
      </div>
      <BlogPosts blogPosts={blogPosts} />
    </div>
  );
};

export default RenderingPage;
