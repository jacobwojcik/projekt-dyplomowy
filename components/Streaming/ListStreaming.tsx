import React from 'react';

import { getProducts } from '@/lib/queries';

import ProductCard from '../ProductCard';

const ListStreaming = async () => {
  const products = await getProducts();

  return (
    <div className="mx-4 md:col-span-2">
      <h1 className="my-4 text-lg font-semibold">Najnowsze okazje!</h1>
      <div className="grid-col-1 my-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListStreaming;
