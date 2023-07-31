import Image from 'next/image';
import React from 'react';

import type { Product } from '@/types';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  const { imageurl, name, description, price, quantity } = product;
  return (
    <div className="my-2 grid grid-cols-6 gap-6 border border-zinc-200 p-2">
      <div className="col-span-1 rounded-lg border border-zinc-200 p-4">
        <Image
          src={imageurl ?? '/not-found'}
          width={120}
          height={60}
          alt={'Produkt'}
        />
      </div>
      <div className="col-span-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-sm">{description}</span>
      </div>
      <div className="col-span-2 flex flex-col">
        {' '}
        {/* Here, I changed the col-span to 2 */}
        <span className="text-base font-medium">Dostępna ilość</span>
        <span className="text-sm">{quantity}</span>
        <span className="text-base font-medium">Cena</span>
        <span className="text-sm">{price} PLN</span>
      </div>
    </div>
  );
};

export default ProductItem;
