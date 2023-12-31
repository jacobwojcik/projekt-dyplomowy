import { revalidatePath } from 'next/cache';

import type { Todo } from '@/types';

import { supabase } from '../utils';

export const addTodo = async (
  newTodo: Pick<Todo, 'name' | 'category' | 'isDone' | 'dueDate'>,
): Promise<Todo | null> => {
  

  const { data, error } = await supabase
    .from('todo')
    .insert([newTodo])
    .single();

  revalidatePath('/rewalidacja');

  if (error) {
    throw new Error('Wystąpił błąd podczas dodawania zadania!');
  }

  return data ? data[0] : null;
};
