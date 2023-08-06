import Image from 'next/image';

import type { ProductInfo } from '@/types';

import { Badge } from './Badge';

interface Props {
  product: ProductInfo;
}

const ProductItem = ({ product }: Props) => {
  const { imageurl, name, description, price, quantity, category } = product;
  return (
    <div className="my-2 grid grid-cols-2 gap-6 p-2 sm:grid-cols-6">
      <div className="col-span-1 flex w-max items-center rounded-lg border border-zinc-200 p-4 sm:w-full">
        <Image
          src={imageurl ?? '/not-found'}
          width={120}
          height={60}
          alt={'Produkt'}
        />
      </div>
      <div className=" col-span-1 sm:col-span-3">
        <span className="mb-2 flex flex-col items-start justify-between sm:mb-0 sm:flex-row sm:items-center">
          <h3 className="text-lg font-semibold">{name}</h3>{' '}
          <Badge className="h-max">{category.name}</Badge>
        </span>
        <span className="text-sm">{description}</span>
      </div>
      <div className="col-span-2 flex  sm:flex-col">
        <div className="flex w-1/2 flex-col">
          <span className="text-base font-medium">Dostępna ilość</span>
          <span className="text-sm">{quantity}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium">Cena</span>
          <span className="text-sm">{price} PLN</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
