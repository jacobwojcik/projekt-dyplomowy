import type { ReactNode } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Separator } from '@/components/ui/Separator';
import type { RenderingStrategiesInfo } from '@/types';
import PageRefresh from './PageRefresh';

interface Props {
  information: RenderingStrategiesInfo;
  children?: ReactNode;
}

const SideDescription = ({ information, children }: Props) => {
  const { title, description, pros, cons, content } = information;
  return (
    <div>
      <Card className="w-full lg:w-[420px]">
        <CardHeader>
          <CardTitle className="mb-4">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {pros && (
            <>
              <p>Korzyści:</p>
              <ul className="ml-6 list-disc">
                {pros?.map((item, index) => (
                  <li key={index} className="text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {cons && (
            <>
              <p>Wady:</p>
              <ul className="ml-6 list-disc">
                {cons?.map((item, index) => (
                  <li key={index} className="text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}

          {content && (
            <>
              <Separator />
              <div
                className="mt-4 "
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p className=" text-sm mb-2">
            Kliknij przycisk lub odśwież stronę żeby sprawdzić czy i w jaki
            sposób odświeża się czas.
          </p>
          <PageRefresh />
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideDescription;
