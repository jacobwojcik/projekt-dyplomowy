import type { Todo } from '@/types';

import { createSupabaseClient } from '../utils';

export const getTodos = async (): Promise<Todo[]> => {
  const supabase = createSupabaseClient();

  const { data: todos } = await supabase
    .from('todo')
    .select('*')
    .returns<Todo[]>();

  return todos ?? [];
};
