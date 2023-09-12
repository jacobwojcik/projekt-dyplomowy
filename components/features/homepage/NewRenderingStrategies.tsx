import Image from 'next/image';
import React from 'react';

import { Badge } from '../../ui/Badge';
import { ButtonLink } from '../../ui/ButtonLink';

const badges = ['SEO', 'Rendering', 'Rewalidacja', 'Cache', 'Web'];

const NewRenderingStrategies = () => {
  return (
    <div className="flex min-h-[660px] items-center justify-center py-8">
      <div className="grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-3 text-center text-3xl font-semibold">
            Większa kontrola nad danymi
          </h2>
          <span className="text-center">
            Next.js w wersji 13 został oficjalnie wydany przez twórców - Vercel
            - podczas konferencji w października 2022 roku, wraz z mnóśtwem
            nowości. Nowa wersja Next.js umożliwia tworzenie hybrydowych
            aplikacji internetowych, gdzie część kodu może być renderowana po
            stronie serwera lub klienta. Daje to możliwość bardzo łatwej
            kontroli stanów komponentów na bardzo szczegółowym poziomie.
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
            href="/renderowanie/next-13"
          >
            Sprawdź nowe możliwości
          </ButtonLink>
        </div>

        <div className="flex items-center justify-center p-6 md:p-12">
          <Image
            alt="Web development"
            width={520}
            height={130}
            className="h-4/5"
            src="/images/web.png"
          />
        </div>
      </div>
    </div>
  );
};

export default NewRenderingStrategies;
