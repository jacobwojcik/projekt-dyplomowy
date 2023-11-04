import type { Todo } from '@/types';
import { supabase } from '../utils';

export const getTodos = async (): Promise<Todo[]> => {
  
  const { data: todos } = await supabase
    .from('todo')
    .select('*')
    .returns<Todo[]>();

  return todos ?? [];
};
