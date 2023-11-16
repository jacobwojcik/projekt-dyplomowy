import DatabasesCard from '@/components/features/databases/DatabasesCard';
import FetchingData from '@/components/features/databases/FetchingData';
import FilteredProductList from '@/components/features/databases/FilteredProductList';
import ProductsFetcher from '@/components/features/databases/ProductsFetcher';
import ServerDataFetches from '@/components/features/databases/ServerDataFetches';
import SupabaseInitCodeBlock from '@/components/features/databases/SupabaseInitCodeBlock';
import SectionNavigation from '@/components/shared/SectionNavigation';
import { getProducts } from '@/lib/queries';

export default async function Page() {
  const products = await getProducts();
  return (
    <>
      <div className="mx-auto my-6 max-w-7xl ">
        <DatabasesCard />

        <SupabaseInitCodeBlock />

        <FetchingData />

        <ProductsFetcher />

        <ServerDataFetches />

        <FilteredProductList products={products} />

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
