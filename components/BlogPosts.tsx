import Image from 'next/image';
import React from 'react';

import type { BlogPost } from '@/types';

import BlogPostLoader from './features/loaders/BlogPostLoader';
import { ScrollArea, ScrollBar } from './ui/ScrollArea';

interface Props {
  blogPosts: BlogPost[];
}

const BlogPosts = ({ blogPosts }: Props) => {
  return (
    <ScrollArea className="px-6 lg:px-0">
      <div className="my-6 flex h-[220px] w-full space-x-4 pb-4">
        {blogPosts.length
          ? blogPosts.map((blog) => (
              <div key={blog.id} className="flex flex-col">
                <div className="h-[160px] w-[280px]">
                  <Image
                    width={280}
                    height={160}
                    style={{ objectFit: 'cover' }}
                    src={blog.imageUrl ?? ''}
                    alt={`Blog post`}
                    className="rounded-lg"
                  ></Image>
                </div>
                <span className="mt-1 text-sm text-zinc-500">
                  {blog.created_at?.slice(0, 10)}
                </span>
                <span className="text-sm font-semibold">{blog.title}</span>
              </div>
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <div key={`loader-${index}`} className="flex flex-col">
                <BlogPostLoader />
              </div>
            ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default BlogPosts;
