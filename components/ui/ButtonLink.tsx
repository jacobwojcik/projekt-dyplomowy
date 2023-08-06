import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  href: string;
  light?: boolean;
  children: ReactNode;
}

export const ButtonLink = ({ href, light, children }: Props) => (
  <Link
    className={`rounded-lg px-3 py-2 hover:opacity-75 ${
      light ? 'border border-black bg-white text-black' : 'bg-black text-white'
    }`}
    href={href}
  >
    {children}
  </Link>
);
