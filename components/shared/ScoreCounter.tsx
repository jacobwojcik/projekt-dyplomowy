'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AutoCounter from './AutoCounter';

export default function ScoreCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div className="relative h-[110px] w-[250px]" ref={ref}>
      <>
        <motion.svg
          className="absolute inset-0 m-auto"
          viewBox="0 0 100 100"
          width={90}
          height={90}
          ref={ref}
        >
          <motion.circle
            initial={{ pathLength: 0 }}
            animate={{ pathLength: inView ? 1 : 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
            strokeWidth={7}
            strokeDasharray="0 1"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            cx="50"
            cy="50"
            r="45"
            fill="#DCFCE7"
            stroke="#22C55E"
          />
        </motion.svg>
        {inView ? (
          <AutoCounter />
        ) : (
          <p className="absolute inset-0 mx-auto flex items-center justify-center font-display font-semibold text-xl text-green-500">
            0
          </p>
        )}
      </>
    </div>
  );
}
