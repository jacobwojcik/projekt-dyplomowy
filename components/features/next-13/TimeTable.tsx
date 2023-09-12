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
    <div className="mx-4 xl:mx-0">
      <h2 className="mb-3 mt-6 font-semibold">Czas na świecie</h2>
      <Table className="mb-6 rounded-lg border px-6">
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
    </div>
  );
};

export default TimeTable;
