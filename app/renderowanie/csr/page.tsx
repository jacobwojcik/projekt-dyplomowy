'use client';

import { useEffect, useState } from 'react';

import RenderingPage from '@/components/features/rendering/RenderingPage';
import { renderingStrategiesInfo } from '@/lib/consts/renderingStrategiesInfo';
import type { Time } from '@/types';
import CsrNetwork from '@/components/features/rendering/CsrNetwork';
import CsrCodeBlock from '@/components/features/rendering/CsrCodeBlock';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentTime, setCurrentTime] = useState<Time>({} as Time);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const res = await fetch(`/api/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Wystąpił błąd:', error);
      }
    };

    const fetchBlogPostsData = async () => {
      try {
        const res = await fetch(`/api/posts`);
        const data = await res.json();
        setBlogPosts(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Wystąpił błąd:', error);
      }
    };

    const fetchCurrentTime = async () => {
      try {
        const res = await fetch('https://worldtimeapi.org/api/timezone/Poland');
        const time = await res.json();
        setCurrentTime(time);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Wystąpił błąd:', error);
      }
    };

    fetchProductsData();
    fetchCurrentTime();
    fetchBlogPostsData();
  }, []);
  return (
    <RenderingPage
      information={renderingStrategiesInfo.csr}
      products={products}
      currentTime={currentTime}
      blogPosts={blogPosts}
      navOptions={{
        prevHref: '/',
        prevName: 'Wróć na stronę główną',
        nextHref: '/renderowanie/ssr',
        nextName: 'Server Side Rendering (SSR)',
      }}
    >
      <CsrNetwork />
      <CsrCodeBlock />
    </RenderingPage>
  );
}
