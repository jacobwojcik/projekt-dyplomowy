'use client';
import { useEffect, useState } from 'react';

export const AutoCounter = () => {
  const [count, setCount] = useState(0);

  const duration = 2500;
  const value = 100;

  useEffect(() => {
    let startTime: number | undefined;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const timePassed = timestamp - startTime;
      const progress = timePassed / duration;
      const currentCount = easeOut(progress, 0, value, 1);
      if (currentCount >= value) {
        setCount(value);
        return;
      }
      setCount(currentCount);
      requestAnimationFrame(animateCount);
    };
    requestAnimationFrame(animateCount);
  }, [value, duration]);

  return (
    <p className="absolute inset-0 mx-auto flex items-center justify-center font-display text-xl text-green-500">
      {Intl.NumberFormat().format(count)}
    </p>
  );
};
const easeOut = (t: number, b: number, c: number, d: number) => {
  t = t > d ? d : t / d;
  return Math.round(-c * t * (t - 2) + b);
};

export default AutoCounter;
