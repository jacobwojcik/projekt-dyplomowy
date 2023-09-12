import Image from 'next/image';

import { getBlogPosts } from '@/lib/queries';

import { ScrollArea, ScrollBar } from '../../ui/ScrollArea';

const BlogPosts = async () => {
  const blogPosts = await getBlogPosts();
  return (
    <ScrollArea className="px-6 xl:px-0">
      <div className="my-6 flex h-[220px] w-full space-x-4 pb-4">
        {blogPosts.length ? (
          blogPosts.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              <div className="h-[160px] w-[280px]">
                <Image
                  width={280}
                  height={160}
                  src={blog.imageUrl ?? ''}
                  alt={`Blog post`}
                  className="rounded-lg object-cover"
                  sizes="280px"
                ></Image>
              </div>
              <span className="mt-1 text-sm text-zinc-500">
                {blog.created_at?.slice(0, 10)}
              </span>
              <span className="text-sm font-semibold">{blog.title}</span>
            </div>
          ))
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default BlogPosts;
