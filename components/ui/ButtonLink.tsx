import Link from 'next/link';
import type { ReactNode } from 'react';

interface Props {
  href: string;
  light?: boolean;
  className?: string;
  children: ReactNode;
}

export const ButtonLink = ({ href, className, light, children }: Props) => (
  <Link
    className={`rounded-lg px-3 py-2 text-center duration-150 hover:scale-[1.03]  hover:opacity-75 ${
      light ? 'border border-black bg-white text-black' : 'bg-black text-white'
    } ${className}`}
    href={href}
  >
    {children}
  </Link>
);
