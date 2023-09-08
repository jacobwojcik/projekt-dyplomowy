import { TableCell, TableRow } from '@/components/ui/Table';
import { formatTime } from '@/lib/helpers';

const NewYorkTimezone = async () => {
  const res = await fetch(
    'https://worldtimeapi.org/api/timezone/America/New_York',
    { next: { revalidate: 30 } },
  );
  const time = await res.json();
  return (
    <TableRow>
      <TableCell className="px-2 font-medium sm:px-4">Nowy Jork</TableCell>
      <TableCell>{formatTime(time.datetime)}</TableCell>
    </TableRow>
  );
};

export default NewYorkTimezone;
