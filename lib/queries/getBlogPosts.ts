import type { BlogPost } from '@/types';

import { supabase } from '../utils';

export const getBlogPosts = async () => {

  const { data: blogPosts } = await supabase
    .from('blog_post')
    .select('*')
    .returns<BlogPost[]>();

  return blogPosts ?? [];
};
