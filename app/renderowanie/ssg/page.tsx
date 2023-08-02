import ProductsList from '@/components/ProductsList';
import SideDescription from '@/components/SideDescription';
import { renderingStrategiesInfo } from '@/lib/consts/renderingStrategiesInfo';
import { getProducts } from '@/lib/queries';
import { getCurrentTime } from '@/lib/utils';

export const dynamic = 'force-static';

export default async function Page() {
  const products = await getProducts();
  const currentTime = await getCurrentTime({ cache: 'force-cache' });

  return (
    <div className="my-6 flex gap-8">
      <SideDescription information={renderingStrategiesInfo.ssg} />
      <ProductsList products={products} currentTime={currentTime} />
    </div>
  );
}
