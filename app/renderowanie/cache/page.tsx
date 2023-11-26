import TimesCodeBlock from '@/components/features/cache/TimesCodeBlock';
import CachingCard from '@/components/features/cache/CachingCard';
import PossibilitiesCard from '@/components/features/cache/PossibilitiesCard';
import TimeTable from '@/components/features/cache/TimeTable';
import SectionNavigation from '@/components/shared/SectionNavigation';

export const revalidate = 30;
export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <>
      <div className="mx-auto my-6 max-w-7xl ">
        <PossibilitiesCard />

        <TimeTable />
        <TimesCodeBlock />

        <CachingCard />

        <SectionNavigation
          navOptions={{
            prevHref: '/',
            prevName: 'Wróć na stronę główną',
          }}
        />
      </div>
    </>
  );
}
