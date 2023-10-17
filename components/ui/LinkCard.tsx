import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

interface Props {
  href: string;
  title: string;
  imageUrl: string;
  children?: ReactNode;
}

const LinkCard = ({ href, title, imageUrl, children }: Props) => {
  return (
    <Link
      className="subheading-anchor w-full font-medium sm:w-[340px]"
      href={href}
    >
      <div className="relative  w-full rounded-lg border bg-white shadow-md  duration-200 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-lg">
        <div className="relative h-[180px] w-full">
          <Image
            fill
            src={imageUrl}
            alt={title}
            className="border-b border-zinc-300 object-cover object-left-top"
          />
        </div>
        <div className="flex flex-col justify-between space-y-4 p-6">
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
