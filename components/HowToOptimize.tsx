import React from 'react';

import { ButtonLink } from './ui/ButtonLink';

const HowToOptimize = () => {
  return (
    <div className="flex h-[660px] flex-col items-center justify-center px-4">
      <h2 className="mb-3 text-center text-3xl font-semibold">
        Jak optymalizować wydajność strony?
      </h2>
      <span className="mb-12 max-w-[70%] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
        tristique est eget faucibus. Mauris interdum nisl vulputate risus
        maximus ultricies. Proin a luctus mi. Sed orci felis, volutpat quis
        finibus quis, dignissim sed mauris. Curabitur non diam et orci rutrum
        dignissim.
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
