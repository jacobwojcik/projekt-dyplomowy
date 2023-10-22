import './style.css';

import type { Metadata } from 'next';

import BlogPostsUnoptimized from '@/components/features/seo/BlogPosts';
import ProductsList from '@/components/features/seo/ProductsList';
import UnoptimizedHero from '@/components/features/optimization/UnoptimizedHero';
import UnoptimizedResults from '@/components/features/optimization/UnoptimizedResults';
import SectionNavigation from '@/components/shared/SectionNavigation';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default async function Page() {
  return (
    <main className="mx-auto my-6 max-w-7xl font-roboto">
      <UnoptimizedHero />
      <ProductsList />

      <section className="m-4 mt-8 ">
        <h3 className="text-lg font-semibold">Niepoprawne linki</h3>
        <div className="flex items-center justify-center gap-6">
          <a className="rounded-lg bg-black px-3 py-2 text-white hover:opacity-75">
            Niedziałający link
          </a>
          <a
            href="/"
            className="rounded-lg bg-black px-3 py-2 text-white hover:opacity-75"
          >
            Start
          </a>
        </div>
      </section>
      <BlogPostsUnoptimized />

      <UnoptimizedResults />
      <SectionNavigation
        navOptions={{
          nextHref: '/z-optymalizacja',
          nextName: 'Z optymalizacją',
          prevHref: '/',
          prevName: 'Wróć na stronę główną',
        }}
      />
    </main>
  );
}
