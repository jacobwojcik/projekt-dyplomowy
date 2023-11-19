'use client';

import ProductCard from '@/components/shared/ProductCard';
import { Button } from '@/components/ui/Button';
import { ProductInfo } from '@/types';
import { useState } from 'react';
import ProductCardLoader from '../loaders/ProductCardLoader';

const ProductsFetcher = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [isLoading, setisLoading] = useState(false);

  const fetchProducts = async () => {
    setisLoading(true);

    const res = await fetch('api/browse/products?limit=3');
    const data: ProductInfo[] = await res.json();

    setisLoading(false);
    setProducts(data);
  };

  return (
    <div className="flex items-center gap-8 my-6 min-h-[300px] mx-4 max-w-7xl xl:mx-0">
      <div>
        <Button
          onClick={fetchProducts}
          disabled={isLoading || !!products.length}
        >
          Pobierz listę produktów
        </Button>
      </div>
      <div>
        {!!products.length ? (
          <div className="flex gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : isLoading ? (
          <div className="flex gap-6">
            {[...Array.from({ length: 3 })].map((_, index) => (
              <ProductCardLoader key={index} />
            ))}
          </div>
        ) : (
          <p>Kliknij obok aby pobrać produkty!</p>
        )}
      </div>
    </div>
  );
};

export default ProductsFetcher;
