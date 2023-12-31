'use client';

import LinkCard from '@/components/ui/LinkCard';
import { showUp, showUpDelayed } from '@/lib/consts/animations';
import { motion } from 'framer-motion';

const WhatsMoreCards = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-6 md:flex-row">
      <motion.div
        initial="hide"
        whileInView="show"
        variants={showUp}
        viewport={{ once: true }}
        className="w-full"
      >
        <LinkCard
          href={`/streaming`}
          title="Streaming"
          imageUrl="/images/server-streaming.png"
          aria-label="Streaming Dlaczego?"
        >
          Jak "przyśpieszyć" serwer?
        </LinkCard>
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        variants={showUpDelayed}
        viewport={{ once: true }}
        className="w-full"
      >
        <LinkCard
          href={`/rewalidacja`}
          title="Rewalidacja"
          imageUrl="/images/revalidation.png"
          aria-label="Rewalidacja"
        >
          Czyli dynamiczna statyczność
        </LinkCard>
      </motion.div>
    </div>
  );
};

export default WhatsMoreCards;
