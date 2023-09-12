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
          {children}
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideDescription;
