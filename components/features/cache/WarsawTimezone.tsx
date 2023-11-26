import { TableCell, TableRow } from '@/components/ui/Table';
import { formatTime } from '@/lib/helpers';

const WarsawTimezone = async () => {
  const res = await fetch(
    'https://worldtimeapi.org/api/timezone/Europe/Warsaw',
    { next: { revalidate: 10 } },
  );
  const time = await res.json();
  return (
    <TableRow>
      <TableCell className="px-2 font-medium sm:px-4">Warszawa</TableCell>
      <TableCell>{formatTime(time.datetime)}</TableCell>
    </TableRow>
  );
};

export default WarsawTimezone;
