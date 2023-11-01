import './style.css';

import type { Metadata } from 'next';

import BlogPostsUnoptimized from '@/components/features/seo/BlogPosts';
import ProductsList from '@/components/features/seo/ProductsList';
import UnoptimizedHero from '@/components/features/optimization/UnoptimizedHero';
import UnoptimizedResults from '@/components/features/optimization/UnoptimizedResults';
import SectionNavigation from '@/components/shared/SectionNavigation';
import OptimizeInstructions from '@/components/features/optimization/CodeBlocks/OptimizeInstructions';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default async function Page() {
  return (
    <main className="mx-auto my-6 max-w-7xl font-roboto">
      <UnoptimizedHero />

      <ProductsList />

      <BlogPostsUnoptimized />

      <UnoptimizedResults />

      <OptimizeInstructions />

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
