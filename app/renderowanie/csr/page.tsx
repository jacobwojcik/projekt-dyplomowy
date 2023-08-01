'use client';

import { useEffect, useState } from 'react';

import ProductsList from '@/components/ProductsList';
import SideDescription from '@/components/SideDescription';
import { renderingStrategiesInfo } from '@/lib/consts/renderingStrategiesInfo';
import type { Time } from '@/types';

const host = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [currentTime, setCurrentTime] = useState<Time>({} as Time);

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

    const fetchCurrentTime = async () => {
      try {
        const res = await fetch('https://worldtimeapi.org/api/timezone/Poland');
        const currentTime = await res.json();
        setCurrentTime(currentTime);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Wystąpił błąd:', error);
      }
    };

    fetchProductsData();
    fetchCurrentTime();
  }, []);
  return (
    <div className="mx-10 my-6 flex gap-8">
      <SideDescription information={renderingStrategiesInfo.csr} />
      <ProductsList products={products} currentTime={currentTime} />
    </div>
  );
}
