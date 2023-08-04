'use client';

import React, { useEffect, useState } from 'react';

import type { BlogPost } from '@/types';

import BlogPosts from '../BlogPosts';

const host = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

const BlogPostsUnoptimized = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPostsData = async () => {
      try {
        const res = await fetch(`${host}/api/posts`);
        const data = await res.json();
        setBlogPosts(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Wystąpił błąd:', error);
      }
    };

    fetchBlogPostsData();
  }, []);
  return (
    <section>
      <BlogPosts blogPosts={blogPosts} />
    </section>
  );
};

export default BlogPostsUnoptimized;
