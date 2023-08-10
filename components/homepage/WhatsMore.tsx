import React from 'react';

import LinkCard from '../ui/LinkCard';

const WhatsMore = () => {
  return (
    <div className="grid min-h-[660px]  grid-cols-1 items-center justify-center gap-6 bg-zinc-100/50 px-4 py-8 sm:grid-cols-2 sm:py-0">
      <div className="flex  flex-col items-center">
        <h3 className="mb-3 text-center text-3xl font-semibold">Co więcej?</h3>
        <span className="max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          vestibulum justo vel commodo sodales. Integer vitae suscipit nulla,
          vitae vehicula mauris. Duis fermentum, sapien id dictum placerat, eros
          massa ultrices neque, eu placerat enim quam eget sapien. Aenean
          egestas nisl sed bibendum gravida. Cras et egestas odio. Sed ac est
          rutrum, sodales augue et, hendrerit ante. Nulla facilisi. Morbi mi
          felis, volutpat in libero in, pharetra eleifend nunc.
        </span>
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <LinkCard href={`/sr-streaming`} title="SR Streaming">
          Dlaczego?
        </LinkCard>
        <LinkCard href={`/rewalidacja`} title="Rewalidacja">
          Po co?
        </LinkCard>
      </div>
    </div>
  );
};

export default WhatsMore;
