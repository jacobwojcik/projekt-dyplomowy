import { formatTime } from '@/lib/helpers';
import type { ProductInfo, Time } from '@/types';

import DesignedProductCard from './DesignedProductCard';
import { Separator } from './ui/Separator';

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
        <time>{currentTime?.datetime ? time : 'Loading...'}</time>
      </div>
      <Separator />
      <div className="my-6 grid grid-cols-3 gap-6">
        {products.length ? (
          products.map((product) => (
            <DesignedProductCard key={product.id} product={product} />
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
