import React from 'react';

import LinkCard from '../ui/LinkCard';

const WhatsMore = () => {
  return (
    <div className="grid min-h-[660px]  grid-cols-1 items-center justify-center gap-6 bg-zinc-100/50 px-4 py-8 sm:grid-cols-2 sm:py-0">
      <div className="flex  flex-col items-center">
        <h3 className="mb-3 text-center text-3xl font-semibold">Co więcej?</h3>
        <span className="max-w-md">
          Po wprowadzeniu Server Componenets oraz Next'a w wersji 13, budowanie
          wydajnych interaktywnych stron stało się jeszcze prostsze. Server
          Streaming, wydajniejsza rewalidacja statycznych stron czy Server
          Actions to tylko niektore z wprowadzonych nowości. Zostały one z
          entuzjazmem przyjęte przez &quot;webową&quot; społeczność, jak
          dokładnie działają?
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
