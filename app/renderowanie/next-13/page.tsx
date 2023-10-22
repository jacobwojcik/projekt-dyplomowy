import CachingCard from '@/components/features/next-13/CachingCard';
import PossibilitiesCard from '@/components/features/next-13/PossibilitiesCard';
import TimeTable from '@/components/features/next-13/TimeTable';
import SectionNavigation from '@/components/shared/SectionNavigation';

export const revalidate = 30;
export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <>
      <div className="mx-auto my-6 max-w-7xl ">
        <PossibilitiesCard />

        <TimeTable />

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
