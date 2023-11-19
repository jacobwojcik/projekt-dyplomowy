import React from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

import { ButtonLink } from '../../ui/ButtonLink';

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
      className="flex min-h-[660px] flex-col items-center justify-center bg-zinc-100/50 px-4 py-8"
      id="rendering"
    >
      <h2 className="text-center text-3xl font-semibold">
        Strategie renderowania
      </h2>
      <div className="rounded-lg border bg-card shadow-sm flex flex-col items-center my-8 p-6 max-w-5xl">
        <p className="text-center">
          Renderowanie to proces przekształcania danych w wizualny obraz, który
          widzimy w przeglądarce. W uproszczeniu, gdy mówimy o renderowaniu
          strony, chodzi o to, jak i gdzie strona jest "budowana" przed jej
          wyświetleniem. Dwa główne podejścia do tego procesu to renderowanie po
          stronie serwera i po stronie klienta. W pierwszym przypadku, cała
          strona jest przygotowywana na serwerze i wysyłana do naszej
          przeglądarki. W drugim, to przeglądarka odbiera surowe dane i sama
          "buduje" stronę na naszym urządzeniu. Wybór między tymi dwoma metodami
          ma wielki wpływ na wydajność i doświadczenia użytkownika.
        </p>
        <span className="mt-2 text-center sm:max-w-[70%]">
          Spośród nich można wyróżnić 4 główne strategie renderowania:
        </span>
      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 max-w-5xl w-full">
        {renderingStrategies.map(({ name, href, description }) => (
          <Card
            key={href}
            className="flex  h-[180px] flex-col items-center justify-center gap-2 py-5 text-center sm:h-[220px] sm:w-full sm:gap-4"
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
