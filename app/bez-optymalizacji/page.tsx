import './style.css';

import type { Metadata } from 'next';

import BlogPostsUnoptimized from '@/components/SeoOptimization/BlogPosts';
import ProductsList from '@/components/SeoOptimization/ProductsList';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default async function Page() {
  return (
    <main className="mx-auto my-6 max-w-7xl font-roboto">
      <div className="mx-4 flex flex-col gap-6 md:col-span-1">
        <div className="grid w-full grid-cols-1 rounded-lg border border-zinc-200 p-4 text-center md:grid-cols-3">
          <div className="col-span-1">
            <h1 className="mb-2 text-2xl font-semibold">Bez optymalizacji</h1>
            <span className="text-xs sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nulla justo, consectetur sit amet dui ac, ultrices viverra tortor.
              Duis eget rhoncus nulla. Morbi vel nibh et ex sagittis ultrices.
              Quisque at lectus a erat fringilla placerat vel sed mi. Cras vel
              purus at enim hendrerit sollicitudin vel et nibh. In ultricies
              massa purus, vel cursus tellus sagittis sit amet. Nam diam lacus,
              sodales ut nisl a, tincidunt vulputate diam. Aenean consectetur ac
              est ac ullamcorper. Praesent dignissim, nibh vitae dignissim
              rutrum, est magna ultricies eros, quis maximus nibh nulla gravida
              nibh.
            </span>
          </div>
          <div className="col-span-2 mx-auto flex w-2/3 flex-col items-center justify-center gap-6">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              className="rounded-lg"
              src="https://www.transparentpng.com/download/seo-png/seo-free-download-4.png"
              width={350}
            ></img>
          </div>
        </div>
      </div>

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

      <section className="col-span-3 px-4">
        <h1 className="mb-6 text-lg font-semibold">Wyniki:</h1>
        <div className="flex w-full justify-center">Coming soon...</div>
      </section>
    </main>
  );
}
