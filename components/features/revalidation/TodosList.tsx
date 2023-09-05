import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import type { Todo } from '@/types';

interface Props {
  todos: Todo[];
}

const tableHeaders = ['Zadanie', 'Kategoria', 'Do kiedy?', 'Wykonane'];

const TodosList = ({ todos }: Props) => {
  return (
    <Table className=" rounded-lg border">
      <TableHeader>
        <TableRow>
          {tableHeaders.map((header, index) => (
            <TableHead
              key={index}
              className="w-[75px] px-1 sm:w-[100px] sm:px-4"
            >
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map(({ id, name, category, dueDate, isDone }) => (
          <TableRow key={id}>
            <TableCell className="px-2 font-medium sm:px-4">{name}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{dueDate}</TableCell>
            <TableCell className="flex items-center gap-2">
              {isDone ? (
                <>
                  Tak <CheckCircleIcon className="h-6 w-6 text-green-500" />
                </>
              ) : (
                <>
                  Nie
                  <XCircleIcon className="h-6 w-6 text-red-500" />
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodosList;
