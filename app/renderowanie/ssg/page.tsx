import ProductsList from '@/components/ProductsList';
import SideDescription from '@/components/SideDescription';
import { getProducts } from '@/lib/queries';

const ssgPros = ['Wydajność', 'Bezpieczeństwo', 'Optymalizacja dla SEO'];

const ssgCons = [
  'Czas generowania',
  'Aktualizacje danych',
  'Ograniczona interaktywność',
];

export const dynamic = 'force-static';

const getCurrentTime = async () => {
  try {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Poland', {
      cache: 'force-cache',
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
        title={'SSG - Static Site Generation'}
        description={
          'Static Site Generation (SSG) to technika, która umożliwia generowanie pełnych stron internetowych na serwerze w trakcie procesu budowania strony, przed jej dostarczeniem do przeglądarki klienta. W przypadku użycia frameworku Next.js, statyczne generowanie stron może być osiągnięte w prosty sposób dzięki wbudowanym funkcjom tego frameworku.'
        }
        pros={ssgPros}
        cons={ssgCons}
      />
      <ProductsList products={products} currentTime={currentTime} />
    </div>
  );
}
