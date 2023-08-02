import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/queries';

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="mx-10 my-6  grid grid-cols-3 gap-8">
      <div className="flex flex-col gap-6"></div>

      <div className="col-span-2 w-full">
        <h1 className="text-lg font-semibold">Najnowsze okazje!</h1>
        <div className="my-4 grid grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
