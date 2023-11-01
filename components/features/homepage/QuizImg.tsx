'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { showUp } from '@/lib/consts/animations';

const QuizImg = () => {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      variants={showUp}
      viewport={{ once: true }}
    >
      <Image
        src="/images/quiz.png"
        width={250}
        height={250}
        sizes="360px"
        alt="Quiz"
        className="w-auto"
      />
    </motion.div>
  );
};

export default QuizImg;
