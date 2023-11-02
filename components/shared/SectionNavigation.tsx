import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

type NavOptionPrev =
  | {
      prevHref: string;
      prevName: string;
    }
  | {
      prevHref?: never;
      prevName?: never;
    };

type NavOptionNext =
  | {
      nextHref: string;
      nextName: string;
    }
  | {
      nextHref?: never;
      nextName?: never;
    };

export type NavOptions = NavOptionPrev & NavOptionNext;

interface Props {
  navOptions: NavOptions;
}

const SectionNavigation = ({ navOptions }: Props) => {
  const { nextHref, nextName, prevHref, prevName } = navOptions;

  return (
    <div className="flex flex-col items-center mt-6">
      <nav className="w-full flex justify-between px-6 2xl:px-0 gap-4 mt-6 mb-8">
        <div>
          {prevHref && (
            <Link
              href={prevHref}
              className="flex text-xs sm:text-lg items-center text-center animate-bounce-right-left"
            >
              <ArrowLeftIcon className="h-3 w-3 sm:h-6 sm:w-6 text-black mr-2" />
              {prevName}
            </Link>
          )}
        </div>
        {nextHref && (
          <Link
            href={nextHref}
            className="flex text-xs sm:text-lg items-center text-center animate-bounce-left-right"
          >
            {nextName}{' '}
            <ArrowRightIcon className="h-3 w-3 sm:h-6 sm:w-6 text-black ml-2" />
          </Link>
        )}
      </nav>
    </div>
  );
};

export default SectionNavigation;
