import ProductsList from '@/components/ProductsList';
import SideDescription from '@/components/SideDescription';
import { renderingStrategiesInfo } from '@/lib/consts/renderingStrategiesInfo';
import { getProducts } from '@/lib/queries';
import { getCurrentTime } from '@/lib/utils';

export default async function Page() {
  const products = await getProducts();
  const currentTime = await getCurrentTime({ cache: 'no-cache' });

  return (
    <div className="mx-10 my-6 flex gap-8">
      <SideDescription information={renderingStrategiesInfo.ssr} />
      <ProductsList products={products} currentTime={currentTime} />
    </div>
  );
}
