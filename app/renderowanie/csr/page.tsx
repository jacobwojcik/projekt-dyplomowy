'use client';

import { useEffect, useState } from 'react';

import ProductsList from '@/components/ProductsList';
import SideDescription from '@/components/SideDescription';
import type { Time } from '@/types';

const csrPros = [
  'Interaktywność',
  'Separacja logiki frontendu i backendu:',
  'Rozsądne zarządzanie stanem',
];

const csrCons = [
  'Wydajność pierwszego ładowania',
  'SEO',
  'ZWydajność na urządzeniach mobilnych',
];
const fetchProducts = async () => {
  const host = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

  const products = await fetch(`${host}/api/products`);
  const res = await products.json();
  return res;
};

const getCurrentTime = async () => {
  try {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Poland');
    const currentTime = await res.json();
    return currentTime;
  } catch (e: unknown) {
    console.error(e);
  }
  return undefined;
};

export default function Page() {
  const [products, setProducts] = useState([]);
  const [currentTime, setCurrentTime] = useState<Time>({} as Time);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const res = await fetchProducts();
        setProducts(res);
      } catch (error) {
        console.error('Wystąpił błąd:', error);
      }
    };

    const fetchCurrentTime = async () => {
      try {
        const res = await getCurrentTime();
        setCurrentTime(res);
      } catch (error) {
        console.error('Wystąpił błąd:', error);
      }
    };

    fetchProductsData();
    fetchCurrentTime();
  }, []);
  return (
    <div className="mx-10 my-6 flex gap-8">
      <SideDescription
        title={'CSR - Client Side Renderin'}
        description={
          'Client-Side Rendering (CSR), czyli renderowanie po stronie klienta, to technika generowania stron internetowych, w której większość procesu renderowania odbywa się po stronie przeglądarki klienta, a nie na serwerze. W przeciwnym razie, w przypadku Server-Side Rendering (SSR), strony są generowane w całości na serwerze i dostarczane do przeglądarki klienta jako gotowy HTML.'
        }
        pros={csrPros}
        cons={csrCons}
      />
      <ProductsList products={products} currentTime={currentTime} />
    </div>
  );
}
