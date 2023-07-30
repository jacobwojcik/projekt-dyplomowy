import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

export const ButtonLink = ({ href, children }: Props) => (
  <Link
    className="py-2 px-3 bg-black text-white rounded-lg hover:opacity-75"
    href={href}
  >
    {children}
  </Link>
);
