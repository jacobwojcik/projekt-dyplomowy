import React from 'react';

import LinkCard from '../../ui/LinkCard';

const WhatsMore = () => {
  return (
    <div className="grid min-h-[660px] grid-cols-1 items-center justify-center gap-6 px-6 py-8 lg:grid-cols-2 lg:px-32 lg:py-0">
      <div className="flex flex-col items-center">
        <h3 className="mb-3 text-center text-3xl font-semibold">Co więcej?</h3>
        <span className="lg:max-w-md">
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
          aria-label="Streaming Dlaczego?"
        >
          Dlaczego?
        </LinkCard>
        <LinkCard
          href={`/rewalidacja`}
          title="Rewalidacja"
          imageUrl="/images/rewalidacja.png"
          aria-label="Rewalidacja"
        >
          Po co?
        </LinkCard>
      </div>
    </div>
  );
};

export default WhatsMore;
