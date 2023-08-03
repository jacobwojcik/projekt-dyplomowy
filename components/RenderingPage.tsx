import type { BlogPost, Product, RenderingStrategiesInfo, Time } from '@/types';

import BlogPosts from './BlogPosts';
import ProductsList from './ProductsList';
import SideDescription from './SideDescription';

interface Props {
  information: RenderingStrategiesInfo;
  products: Product[];
  currentTime: Time;
  blogPosts: BlogPost[];
}

const RenderingPage = ({
  information,
  products,
  currentTime,
  blogPosts,
}: Props) => {
  return (
    <div className="my-6">
      <div className="flex gap-8">
        <SideDescription information={information} />
        <ProductsList products={products} currentTime={currentTime} />
      </div>
      <BlogPosts blogPosts={blogPosts} />
    </div>
  );
};

export default RenderingPage;
