import type { ReactNode } from 'react';

import type {
  BlogPost,
  ProductInfo,
  RenderingStrategiesInfo,
  Time,
} from '@/types';

import BlogPosts from '../../shared/BlogPosts';
import ProductsList from '../../shared/ProductsList';
import SideDescription from './SideDescription';
import SectionNavigation, {
  NavOptions,
} from '@/components/shared/SectionNavigation';

interface Props {
  information: RenderingStrategiesInfo;
  products: ProductInfo[];
  currentTime: Time;
  blogPosts: BlogPost[];
  navOptions: NavOptions;
  children?: ReactNode;
}

const RenderingPage = ({
  information,
  products,
  currentTime,
  blogPosts,
  navOptions,
  children,
}: Props) => {
  return (
    <div className="mx-auto my-6 max-w-7xl">
      <div className="mx-6 flex flex-col gap-8 lg:flex-row 2xl:mx-0 mb-4">
        <SideDescription information={information} />
        <ProductsList products={products} currentTime={currentTime} />
      </div>
      <BlogPosts blogPosts={blogPosts} />
      {children}
      <SectionNavigation navOptions={navOptions} />
    </div>
  );
};

export default RenderingPage;
