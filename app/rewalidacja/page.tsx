import AddTodoSheet from '@/components/features/revalidation/AddTodoSheet';
import RevalidationInfo from '@/components/features/revalidation/RevalidationInfo';
import TodosList from '@/components/features/revalidation/TodosList';
import { formatTime } from '@/lib/helpers';
import { getTodos } from '@/lib/queries';
import { getCurrentTime } from '@/lib/utils';

export const revalidate = 300;

export default async function Page() {
  const [todos, time] = await Promise.all([
    getTodos(),
    getCurrentTime({ cache: 'default' }),
  ]);
  const formattedTime = formatTime(time.datetime);
  return (
    <div className="mx-auto my-6 flex max-w-7xl flex-col items-center">
      <div className="flex w-full flex-col px-4 ">
        <div className="f flex items-center justify-between gap-6 ">
          <span className="flex flex-col sm:my-6  sm:flex-row sm:items-center sm:gap-4">
            <h1 className=" text-2xl font-semibold">Lista zadań</h1>
            <time className="mt-1">{formattedTime}</time>
          </span>
          <AddTodoSheet />
        </div>
        <TodosList todos={todos} />
      </div>

      <RevalidationInfo />
    </div>
  );
}
