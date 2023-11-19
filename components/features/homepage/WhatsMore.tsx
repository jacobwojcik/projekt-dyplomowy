import React from 'react';

import LinkCard from '@/components/ui/LinkCard';
import WhatsMoreCards from './WhatsMoreCards';

const WhatsMore = () => {
  return (
    <div className="grid min-h-[660px] grid-cols-1 items-center bg-zinc-100/50 justify-center gap-6 px-6 py-8 lg:grid-cols-2 lg:px-32 lg:py-0">
      <div className="flex flex-col items-center">
        <h3 className="mb-3 text-center text-3xl font-semibold">
          Więcej możliwości
        </h3>
        <span className="lg:max-w-md text-center">
          Nowoczesne aplikacje muszą nie tylko być atrakcyjne wizualnie, ale
          przede wszystkim dynamiczne i wydajne. Next.js dostarcza wielu
          rozwiązań ktore pomagają w budowaniu skalowalnym aplikacji które łączą
          w sobie nowatorskie podejście z najlepszymi wynikami.
        </span>
      </div>
      <WhatsMoreCards />
    </div>
  );
};

export default WhatsMore;
