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
    <div className="mx-auto my-6 max-w-7xl">
      <div className="mx-6 flex flex-col gap-8 lg:flex-row 2xl:mx-0">
        <SideDescription information={information}> {children}</SideDescription>
        <ProductsList products={products} currentTime={currentTime} />
      </div>
      <BlogPosts blogPosts={blogPosts} />
    </div>
  );
};

export default RenderingPage;
