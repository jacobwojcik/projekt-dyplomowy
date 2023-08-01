import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/CardNew';
import type { RenderingStrategiesInfo } from '@/types';

interface Props {
  information: RenderingStrategiesInfo;
}

const SideDescription = ({ information }: Props) => {
  const { title, description, pros, cons } = information;
  return (
    <div>
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Korzyści:</p>
          <ul className="ml-6 list-disc">
            {pros?.map((item, index) => (
              <li key={index} className="text-xs">
                {item}
              </li>
            ))}
          </ul>

          <p>Wady:</p>
          <ul className="ml-6 list-disc">
            {cons?.map((item, index) => (
              <li key={index} className="text-xs">
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p>TBD</p>
          <span className="my-2 block w-full border-b border-zinc-200"></span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideDescription;
