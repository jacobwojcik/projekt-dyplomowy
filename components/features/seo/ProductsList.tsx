'use client';

import React, { useEffect, useState } from 'react';

import type { ProductInfo } from '@/types';

import ProductCard from '../../shared/ProductCard';

const host = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

const ProductsList = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const res = await fetch(`${host}/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Wystąpił błąd:', error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className="mx-4 md:col-span-2">
      <h1 className="my-4 text-lg font-semibold">Najnowsze okazje!</h1>
      <div className="grid-col-1 my-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.slice(0, 5).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
