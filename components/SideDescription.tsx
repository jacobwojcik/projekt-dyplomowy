import type { ReactNode } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import type { RenderingStrategiesInfo } from '@/types';

import { Separator } from './ui/Separator';

interface Props {
  information: RenderingStrategiesInfo;
  children?: ReactNode;
}

const SideDescription = ({ information, children }: Props) => {
  const { title, description, pros, cons } = information;
  return (
    <div>
      <Card className="w-full lg:w-[420px]">
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
          <p className="mt-8">TBD</p>
          <Separator />
          <span className="my-2 block w-full  text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            mollis tristique est eget faucibus. Mauris interdum nisl vulputate
            risus maximus ultricies. Proin a luctus mi. Sed orci felis, volutpat
            quis finibus quis, dignissim sed mauris. Curabitur non diam et orci
            rutrum dignissim. Cras sapien magna, mattis et magna nec, pharetra
            faucibus dolor. In hac habitasse platea dictumst. Vestibulum non
            lacus ultrices, pretium orci eu, eleifend turpis. Praesent pulvinar
            tempus turpis, in pharetra ex venenatis at. Phasellus tincidunt
            risus tortor, ac efficitur lectus lacinia eget. Proin molestie
            venenatis purus, ac ultricies massa iaculis ut. In commodo tortor
            non ante euismod, nec imperdiet lorem ultricies. Morbi at lectus
            ante. Nulla ac nulla at ligula rhoncus porttitor quis at dolor.
            Quisque ut metus eget velit imperdiet faucibus.
          </span>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Separator className="mb-3" />
          {children}
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideDescription;
