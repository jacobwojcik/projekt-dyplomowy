import AddTodoForm from '@/components/AddTodoForm';
import TodosList from '@/components/TodosList';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Sheet';
import { getTodos } from '@/lib/queries';

export const revalidate = 300;

export default async function Page() {
  const todos = await getTodos();
  return (
    <div className="mx-4 my-6 flex h-screen w-full flex-col items-center">
      <h1 className="my-6 text-2xl font-semibold">Lista zadań</h1>
      <TodosList todos={todos} />
      <Sheet>
        <SheetTrigger className="my-4 rounded-lg border border-black bg-white px-3 py-2 text-center text-black hover:opacity-75">
          Dodaj nowe zadanie
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Dodaj nowe zadanie</SheetTitle>
          </SheetHeader>
          <AddTodoForm />
        </SheetContent>
      </Sheet>
    </div>
  );
}
