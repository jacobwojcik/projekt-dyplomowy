import type { Todo } from '@/types';

import { createSupabaseClient } from '../utils';

export const addTodo = async (newTodo: Pick<Todo, 'name'| 'category'| 'isDone'| 'dueDate'>): Promise<Todo | null> => {
  const supabase = createSupabaseClient();  

  const { data, error } = await supabase
    .from('todo')
    .insert([newTodo])
    .single();

  if (error) {
    throw new Error("Wystąpił błąd podczas dodawania zadania!")
  }

  return data ? data[0] : null;
};
