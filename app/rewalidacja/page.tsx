import AddTodoSheet from '@/components/features/revalidation/AddTodoSheet';
import RevalidationInfo from '@/components/features/revalidation/RevalidationInfo';
import TodosList from '@/components/features/revalidation/TodosList';
import { getTodos } from '@/lib/queries';

export const revalidate = 300;

export default async function Page() {
  const todos = await getTodos();
  return (
    <div className="mx-auto my-6 flex max-w-7xl flex-col items-center">
      <div className="flex w-full flex-col px-4 ">
        <div className="flex justify-between gap-6">
          <h1 className="my-6 text-2xl font-semibold">Lista zadań</h1>
          <AddTodoSheet />
        </div>
        <TodosList todos={todos} />
      </div>

      <RevalidationInfo />
    </div>
  );
}
