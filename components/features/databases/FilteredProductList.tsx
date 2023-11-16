'use client';

import ProductCard from '@/components/shared/ProductCard';
import { Button } from '@/components/ui/Button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { ProductInfo } from '@/types';
import { useEffect, useState } from 'react';
import ProductCardLoader from '../loaders/ProductCardLoader';

interface Props {
  products: ProductInfo[];
}

const categories = ['Książki', 'Moda', 'Obuwie', 'Elektronika', 'Zabawki'];

const sortOptions = {
  asc: 'Cena od najniższej',
  desc: 'Cena od najwyższej',
};

const FilteredProductList = ({ products }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);

  const [categoryValue, setCategoryValue] = useState<undefined | string>(
    undefined
  );
  const [sortingValue, setSortingValue] = useState<undefined | string>(
    undefined
  );

  const [resetKey, setResetKey] = useState(0);

  const reset = () => {
    setCategoryValue(undefined);
    setSortingValue(undefined);
    setResetKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const params = new URLSearchParams();

      sortingValue && params.set('sort', sortingValue);
      categoryValue && params.set('category', categoryValue);

      const stringifiedParams = params.toString();

      try {
        setIsLoading(true);
        const res = await fetch(
          `api/browse/products${
            stringifiedParams ? '?' + stringifiedParams : ''
          }`
        );

        const data = await res.json();
        setFilteredProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetching products failed:', error);
      }
    };

    fetchProducts();
  }, [categoryValue, sortingValue]);

  return (
    <div>
      <div>
        <h3 className="my-3 text-xl">Filtrowanie</h3>
        <div className="flex items-end gap-6">
          <div>
            <label className="inline-block mb-1">Kategoria:</label>
            <Select
              key={resetKey}
              onValueChange={(value) => setCategoryValue(value)}
              value={categoryValue}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Wybierz kategorię" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem value={category} key={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="inline-block mb-1">Sortowanie:</label>
            <Select
              onValueChange={(value) => setSortingValue(value)}
              value={sortingValue}
              key={resetKey}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sortuj" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(sortOptions).map(([key, value]) => (
                  <SelectItem value={key} key={key}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button onClick={reset}>Przywróć domyślne</Button>
        </div>
      </div>
      <div>
        {isLoading ? (
          <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <ProductCardLoader key={index} />
            ))}
          </div>
        ) : !!filteredProducts.length ? (
          <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="h-[300px] w-full flex justify-center items-center">
            <span>Brak produktów!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProductList;
