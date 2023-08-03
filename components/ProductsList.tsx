import { formatTime } from '@/lib/helpers';
import type { ProductInfo, Time } from '@/types';

import ProductItem from './ui/ProductItem';
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

        {/* <CardDescription>{description}</CardDescription> */}
      </div>
      <Separator />
      <div>
        {products.length ? (
          products.map((product) => (
            <div key={product.id}>
              <ProductItem product={product} />
              <Separator />
            </div>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
