import AddTodoSheet from '@/components/features/revalidation/AddTodoSheet';
import TodosList from '@/components/features/revalidation/TodosList';
import { getTodos } from '@/lib/queries';

export const revalidate = 300;

export default async function Page() {
  const todos = await getTodos();
  return (
    <div className="mx-4 my-6 flex h-screen w-full flex-col items-center">
      <h1 className="my-6 text-2xl font-semibold">Lista zadań</h1>
      <TodosList todos={todos} />
      <AddTodoSheet />
    </div>
  );
}
