import React from 'react';

import { formatTime } from '@/lib/helpers';
import { getCurrentTime } from '@/lib/utils';

const CurrentTime = async () => {
  const currentTime = await getCurrentTime({ cache: 'no-cache' });
  const time = formatTime(currentTime.datetime);
  return (
    <div className="flex gap-4">
      <h1>Czas:</h1>
      <time>{time}</time>
    </div>
  );
};

export default CurrentTime;
