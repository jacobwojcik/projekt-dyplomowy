import { formatTime } from '@/lib/helpers';
import type { ProductInfo, Time } from '@/types';

import ProductCardLoader from '../features/loaders/ProductCardLoader';
import { Separator } from '../ui/Separator';
import { Skeleton } from '../ui/Skeleton';
import ProductCard from './ProductCard';

interface Props {
  products: ProductInfo[];
  currentTime: Time;
}

const ProductsList = ({ products, currentTime }: Props) => {
  const time = formatTime(currentTime.datetime);

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-row items-center justify-between">
        <h1 className="text-lg font-semibold">Lista produktów</h1>
        <time>
          {currentTime?.datetime ? (
            time
          ) : (
            <Skeleton className="h-[20px] w-[80px] rounded-lg" />
          )}
        </time>
      </div>
      <Separator />
      <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {products.length
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : [...Array.from({ length: 6 })].map((_, index) => (
              <ProductCardLoader key={index} />
            ))}
      </div>
    </div>
  );
};

export default ProductsList;
