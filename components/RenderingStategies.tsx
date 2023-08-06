import React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

import { ButtonLink } from './ui/ButtonLink';

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
    <div className="flex h-[960px] flex-col items-center justify-center bg-zinc-100/50">
      <h2 className="mb-12 text-3xl font-semibold">Strategie renderowania</h2>
      <div className="flex gap-6">
        {renderingStrategies.map(({ name, href, description }) => (
          <Card
            key={href}
            className="flex h-[220px] flex-col items-center justify-center gap-4 py-5 text-center sm:w-[220px]"
          >
            <CardHeader className="w-full p-0">
              <CardTitle>{name}</CardTitle>
            </CardHeader>
            <CardContent className="justify-content flex h-12 flex-col items-center justify-center p-0">
              <span>{description}</span>
            </CardContent>
            <CardFooter className="justify-content flex p-0">
              <ButtonLink href={href}> Zobacz przykład</ButtonLink>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RenderingStategies;
