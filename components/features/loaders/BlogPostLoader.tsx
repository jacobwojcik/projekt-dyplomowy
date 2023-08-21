import React from 'react';

import { Skeleton } from '@/components/ui/Skeleton';

const BlogPostLoader = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-[160px] w-[280px] rounded-lg" />
      <Skeleton className="h-[20px] w-[80px] rounded-lg" />
      <Skeleton className="h-[20px] w-[280px] rounded-lg" />
    </div>
  );
};

export default BlogPostLoader;
