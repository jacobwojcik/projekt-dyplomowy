import ProductsList from '@/components/ProductsList';
import SideDescription from '@/components/SideDescription';
import { getProducts } from '@/lib/queries';

const ssrPros = [
  'Optymalizacja czasu ładowania',
  'Lepsze wsparcie dla SEO',
  'Ukrycie poufnych informacji',
];

const ssrCons = [
  'Większe obciążenie serwera',
  'Mniejsza interaktywność',
  'Zwiększone zużycie zasobów',
];

const getCurrentTime = async () => {
  try {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Poland', {
      cache: 'no-cache',
    });
    const currentTime = await res.json();
    return currentTime;
  } catch (e: unknown) {
    console.error(e);
  }
  return undefined;
};

export default async function Page() {
  const products = await getProducts();
  const currentTime = await getCurrentTime();
  return (
    <div className="mx-10 my-6 flex gap-8">
      <SideDescription
        title={'SSR - Server Side Rendering'}
        description={
          'Server Side Rendering (SSR), czyli renderowanie po stronie serwera, to technika pozwalająca na generowanie pełnych stron internetowych na serwerze, przed ich dostarczeniem do przeglądarki klienta. W przypadku użycia Next.js, SSR może być osiągnięte w prosty sposób dzięki wbudowanym funkcjom frameworku.'
        }
        pros={ssrPros}
        cons={ssrCons}
      />
      <ProductsList products={products} currentTime={currentTime} />
    </div>
  );
}
