import type { BlogPost } from '@/types';

import { createSupabaseClient } from '../utils';

export const getBlogPosts = async () => {
  const supabase = createSupabaseClient();

  const { data: blogPosts } = await supabase
    .from('blog_post')
    .select('*')
    .returns<BlogPost[]>();

  return blogPosts ?? [];
};
