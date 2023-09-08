import React from 'react';

import { ButtonLink } from '../ui/ButtonLink';

const HowToOptimize = () => {
  return (
    <div
      className="flex h-[660px] flex-col items-center justify-center bg-zinc-100/50 px-4"
      id="optymalizacja"
    >
      <h2 className="mb-3 text-center text-3xl font-semibold">
        Jak optymalizować wydajność strony?
      </h2>
      <span className="mb-12 text-center sm:max-w-[70%]">
        W dzisiejszym zdominowanym przez wyszukiwarki świecie, dobrze
        przemyślana strategia SEO jest nie tylko narzędziem do osiągnięcia
        wyższej pozycji w wynikach wyszukiwania, lecz także kluczem do zdobycia
        zaufania użytkowników. Poprzez optymalizację treści, struktury i
        technicznych aspektów witryny, można nie tylko zwiększyć jej widoczność,
        ale również skonstruować solidne fundamenty dla długoterminowego sukcesu
        w świecie online.
      </span>
      <div className="flex gap-6">
        <ButtonLink className="text-sm sm:text-base" href="/bez-optymalizacji">
          Wersja bez optymalizacji
        </ButtonLink>
        <ButtonLink
          className="text-sm sm:text-base"
          href="/z-optymalizacja"
          light
        >
          Wersja zoptymalizowana
        </ButtonLink>
      </div>
    </div>
  );
};

export default HowToOptimize;
