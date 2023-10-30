'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { showUp } from '@/lib/consts/animations';

const NewRenderingStrategiesImg = () => {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={showUp}
      viewport={{ once: true }}
    >
      <Image
        alt="Web development"
        width={520}
        height={130}
        className="h-4/5 object-contain"
        sizes="(max-width: 768px) 80vw, 33vw"
        src="/images/web.png"
      />
    </motion.div>
  );
};

export default NewRenderingStrategiesImg;
