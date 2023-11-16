import React from 'react';

import { Badge } from '../../ui/Badge';
import { ButtonLink } from '../../ui/ButtonLink';
import NewRenderingStrategiesImg from './NewRenderingStrategiesImg';

const badges = ['SEO', 'Rendering', 'Rewalidacja', 'Cache', 'Web'];

const NewRenderingStrategies = () => {
  return (
    <div className="flex min-h-[660px] items-center bg-zinc-100/50 justify-center py-8">
      <div className="grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-3 text-center text-3xl font-semibold">
            Hybrydowe podejście
          </h2>
          <span className="text-center">
            Next.js umożliwia tworzenie hybrydowych aplikacji internetowych,
            gdzie część kodu może być renderowana po stronie serwera lub
            klienta. Daje to możliwość bardzo łatwej kontroli stanów komponentów
            na bardzo szczegółowym poziomie.
          </span>

          <div className="my-6 flex flex-wrap justify-center gap-x-3 gap-y-4  sm:justify-between sm:gap-x-0">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                className="h-max p-2 px-3"
                variant={'secondary'}
              >
                {badge}
              </Badge>
            ))}
          </div>

          <ButtonLink
            className="text-sm sm:text-base"
            href="/renderowanie/cache"
          >
            Sprawdź dostępne opcje
          </ButtonLink>
        </div>

        <div className="flex items-center justify-center p-6 md:p-12">
          <NewRenderingStrategiesImg />
        </div>
      </div>
    </div>
  );
};

export default NewRenderingStrategies;
