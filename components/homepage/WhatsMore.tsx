import React from 'react';

import LinkCard from '../ui/LinkCard';

const WhatsMore = () => {
  return (
    <div className="grid min-h-[660px] grid-cols-1 items-center justify-center gap-6 px-6 py-8 sm:py-0 md:grid-cols-2 md:px-32">
      <div className="flex flex-col items-center">
        <h3 className="mb-3 text-center text-3xl font-semibold">Co więcej?</h3>
        <span className="max-w-md">
          Po wprowadzeniu komponentów serwerowych oraz Next&apos;a w wersji 13,
          budowanie wydajnych interaktywnych stron stało się jeszcze prostsze.
          Streaming, wydajniejsza rewalidacja statycznych stron czy &quot;Server
          Actions&quot; to tylko niektóre z wprowadzonych nowości. Zostały one z
          entuzjazmem przyjęte przez &quot;webową&quot; społeczność, jak
          dokładnie działają?
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 py-6 md:flex-row">
        <LinkCard
          href={`/streaming`}
          title="Streaming"
          imageUrl="/images/streaming.png"
        >
          Dlaczego?
        </LinkCard>
        <LinkCard
          href={`/rewalidacja`}
          title="Rewalidacja"
          imageUrl="/images/rewalidacja.png"
        >
          Po co?
        </LinkCard>
      </div>
    </div>
  );
};

export default WhatsMore;
