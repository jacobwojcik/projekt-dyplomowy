import React from 'react';

import { ButtonLink } from '../../ui/ButtonLink';
import ScoreCounter from '@/components/shared/ScoreCounter';

const HowToOptimize = () => {
  return (
    <div
      className="flex min-h-[660px] flex-col items-center justify-center bg-white px-4 py-8"
      id="optymalizacja"
    >
      <h2 className="mb-3 text-center text-3xl font-semibold">
        Jak optymalizować wydajność strony?
      </h2>
      <div className="flex gap-6 items-center flex-col lg:flex-row my-6">
        <span className="sm:max-w-lg text-center">
          Dobrze przemyślana strategia SEO jest nie tylko narzędziem do
          osiągnięcia wyższej pozycji w wynikach wyszukiwania, lecz także
          kluczem do zdobycia zaufania użytkowników. Poprzez optymalizację
          treści, struktury i technicznych aspektów witryny, można nie tylko
          zwiększyć jej widoczność, ale również skonstruować solidne fundamenty
          dla długoterminowego sukcesu w świecie online.
        </span>
        <div className="bg-white shadow-md rounded-lg py-5 w-[250px]">
          <ScoreCounter />
          <div className="w-[250px] text-center">
            <span className="text-xl text-black inline-block text-center">
              SEO
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-4">
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
