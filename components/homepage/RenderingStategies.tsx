import React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

import { ButtonLink } from '../ui/ButtonLink';

const renderingStrategies: {
  name: string;
  href: string;
  description: string;
}[] = [
  {
    name: 'CSR',
    description: 'Client Side Rendering',
    href: '/renderowanie/csr',
  },
  {
    name: 'SSR',
    description: 'Server Side Rendering',
    href: '/renderowanie/ssr',
  },
  {
    name: 'SSG',
    description: 'Static Site Generation',
    href: '/renderowanie/ssg',
  },
  {
    name: 'ISR',
    description: 'Incremental Static Regeneration',
    href: '/renderowanie/isr',
  },
];

const RenderingStategies = () => {
  return (
    <div
      className="flex h-[660px] flex-col items-center justify-center bg-zinc-100/50 px-4"
      id="rendering"
    >
      <h2 className="mb-12 text-center text-3xl font-semibold">
        Strategie renderowania
      </h2>
      <span className="mb-12 max-w-[70%] text-center">
        W erze Next.js 12 wyrózniamy 4 główne strategie renderowania
      </span>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {renderingStrategies.map(({ name, href, description }) => (
          <Card
            key={href}
            className="flex  h-[180px] flex-col items-center justify-center gap-2 py-5 text-center sm:h-[220px] sm:w-[220px] sm:gap-4"
          >
            <CardHeader className="w-full p-0">
              <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className="justify-content flex h-12 flex-col items-center justify-center p-0 px-2 text-sm sm:text-base">
              <span>{description}</span>
            </CardContent>
            <CardFooter className="justify-content flex p-0">
              <ButtonLink className="text-sm sm:text-base" href={href}>
                {' '}
                Zobacz przykład
              </ButtonLink>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RenderingStategies;
