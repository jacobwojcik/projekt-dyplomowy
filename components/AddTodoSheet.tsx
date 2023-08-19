import AddTodoForm from '@/components/AddTodoForm';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Sheet';

const AddTodoSheet = () => {
  return (
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
  );
};

export default AddTodoSheet;
