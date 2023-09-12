import Image from 'next/image';
import { Suspense } from 'react';

import SeoCards from '@/components/features/seo/SeoCards';
import BlogPosts from '@/components/features/streaming/BlogPostsStreaming';
import ListStreaming from '@/components/features/streaming/ListStreaming';

export const dynamic = 'force-static';

export default async function Page() {
  return (
    <main className="mx-auto my-6 max-w-7xl">
      <div className="mx-4 flex flex-col gap-6 md:col-span-1 xl:mx-0">
        <div className="grid w-full grid-cols-1 rounded-lg border border-zinc-200 p-4 text-center md:grid-cols-3">
          <div className="col-span-1 flex flex-col items-center justify-around p-0 md:py-4">
            <h1 className="mb-2 text-2xl font-semibold">
              Jak zoptymalizować stronę?
            </h1>
            <span className="inline-block text-xs sm:text-sm">
              Next.js posiada wiele wbudowanych ułatwień, które w rękach
              sprawnego dewelopera pozwolą tworzyć szybkie, wydajne nowoczesne
              strony spełniające założenia{' '}
              <a
                className="font-medium underline"
                href="https://web.dev/vitals/"
              >
                Core Web Vitals
              </a>
            </span>
            <span className="mt-2 inline-block text-xs sm:text-sm">
              Poniżej znajdziesz wskazówki które pozwolą Ci usprawnić jakość
              doświadczeń użytkowników oraz poprawić wyniki SEO dzięki którym
              poprawisz wyniki wyszukiwania twoich aplikacji!
            </span>
          </div>
          <div className="col-span-2 mx-auto mt-4 flex w-2/3 flex-col items-center justify-center gap-6 md:mt-0">
            <Image
              className="rounded-lg"
              src="/images/seo-free-download-4.png"
              width={360}
              height={190}
              alt={'Hero image'}
              sizes="(max-width: 480px) 250px, (max-width: 768px) 30vw, 360px"
              priority
            />
          </div>
        </div>
      </div>

      <Suspense>
        <ListStreaming />
      </Suspense>

      <Suspense>
        <BlogPosts />
      </Suspense>

      <SeoCards />
    </main>
  );
}
