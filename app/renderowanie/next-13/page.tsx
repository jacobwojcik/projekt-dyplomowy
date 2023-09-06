import TimeTable from '@/components/TimeTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export const revalidate = 30;

export default async function Page() {
  return (
    <>
      <div className="mx-auto my-6 max-w-7xl">
        <Card className="mx-4 mt-6 max-w-7xl xl:m-0 ">
          <CardHeader>
            <CardTitle>Dlaczego Next 13 </CardTitle>
          </CardHeader>
          <CardContent>
            TBD
            <br />
            <br />
            TBD
          </CardContent>
        </Card>
        <TimeTable />
      </div>
    </>
  );
}
