'use server';

import type { Todo } from '@/types';

import { addTodo } from '../queries';

export const addTodoAction = async (
  newTodo: Pick<Todo, 'name' | 'category' | 'isDone' | 'dueDate'>,
): Promise<Todo | null> => {
  const res = await addTodo({
    ...newTodo,
    dueDate: newTodo.dueDate,
  });
  return res;
};
