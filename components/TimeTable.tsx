import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

import NewYorkTimezone from './NewYorkTimezone';
import WarsawTimezone from './WarsawTimezone';

const tableHeaders = ['Miasto', 'Czas'];

const TimeTable = () => {
  return (
    <Table className=" my-6 rounded-lg border">
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
        <NewYorkTimezone />
        <WarsawTimezone />
      </TableBody>
    </Table>
  );
};

export default TimeTable;
