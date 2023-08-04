import Image from 'next/image';
import { Suspense } from 'react';

import BlogPosts from '@/components/Streaming/BlogPostsStreaming';
import ListStreaming from '@/components/Streaming/ListStreaming';

export default async function Page() {
  return (
    <main className="mx-auto my-6 max-w-7xl">
      <div className="mx-4 flex flex-col gap-6 md:col-span-1">
        <div className="grid w-full grid-cols-1 rounded-lg border border-zinc-200 p-4 text-center md:grid-cols-3">
          <div className="col-span-1">
            <h1 className="font-roboto mb-2 text-2xl font-semibold">
              Z optymalizacją
            </h1>
            <span className=" text-xs sm:text-base">
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
            <Image
              className="rounded-lg"
              src="https://mangools.com/blog/wp-content/uploads/2019/07/learn-seo-new-t.png"
              width={560}
              height={300}
              alt={'Hero image'}
            ></Image>
          </div>
        </div>
      </div>

      <Suspense>
        <ListStreaming />
      </Suspense>

      <Suspense>
        <BlogPosts />
      </Suspense>
    </main>
  );
}
