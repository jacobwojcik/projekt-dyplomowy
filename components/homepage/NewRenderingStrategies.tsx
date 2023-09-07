import React from 'react';

import { ButtonLink } from '../ui/ButtonLink';

const NewRenderingStrategies = () => {
  return (
    <div className="flex h-[660px] flex-col items-center justify-center px-4">
      <h2 className="mb-3 text-center text-3xl font-semibold">
        Nowości w renderowaniu
      </h2>
      <span className="mb-12 max-w-[70%] text-center">
        Next.js w wersji 13 został oficjalnie wydany przez twórców - Vercel -
        podczas konferencji w października 2022 roku, wraz z mnóśtwem nowości.
        Nowa wersja Next.js umożliwia tworzenie hybrydowych aplikacji
        internetowych, gdzie część kodu może być renderowana po stronie serwera
        lub klienta. Daje to możliwość bardzo łatwej kontroli stanów komponentów
        na bardzo szczegółowym poziomie.
      </span>
      <div className="flex gap-6">
        <ButtonLink
          className="text-sm sm:text-base"
          href="/renderowanie/next-13"
        >
          Nowe możliwości
        </ButtonLink>
      </div>
    </div>
  );
};

export default NewRenderingStrategies;
