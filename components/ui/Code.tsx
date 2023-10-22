import type { ReactNode } from 'react';
import React from 'react';

const Code = ({ children }: { children: ReactNode }) => {
  return (
    <code className="rounded-lg bg-zinc-100/50 px-2 py-1 text-sm text-green-500 font-code">
      {children}
    </code>
  );
};

export default Code;
