import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

interface Props {
  href: string;
  title: string;
  children?: ReactNode;
}

const LinkCard = ({ href, title, children }: Props) => {
  return (
    <Link
      className="subheading-anchor font-medium"
      aria-label="Link to section"
      href={href}
    >
      <div className="relative w-[230px] rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-2 [&amp;>h3]:!mt-0 [&amp;>h4]:!mt-0 [&amp;>p]:text-muted-foreground">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {title}
            </h3>
            <p className="leading-7">{children}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LinkCard;
