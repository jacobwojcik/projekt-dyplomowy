import './style.css';

import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/queries';

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="mx-auto my-6 max-w-7xl">
      <div className="mx-4 flex flex-col gap-6 md:col-span-1">
        <div className="grid w-full grid-cols-1 rounded-lg border border-zinc-200 p-4 text-center md:grid-cols-3">
          <div className="col-span-1">
            <h1 className="font-roboto mb-2 text-2xl font-semibold">
              Bez optymalizacji
            </h1>
            <span className="font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nulla justo, consectetur sit amet dui ac, ultrices viverra tortor.
              Duis eget rhoncus nulla. Morbi vel nibh et ex sagittis ultrices.
              Quisque at lectus a erat fringilla placerat vel sed mi. Cras vel
              purus at enim hendrerit sollicitudin vel et nibh. In ultricies
              massa purus, vel cursus tellus sagittis sit amet. Nam diam lacus,
              sodales ut nisl a, tincidunt vulputate diam. Aenean consectetur ac
              est ac ullamcorper. Praesent dignissim, nibh vitae dignissim
              rutrum, est magna ultricies eros, quis maximus nibh nulla gravida
              nibh.
            </span>
          </div>
          <div className="col-span-2 mx-auto flex w-2/3 flex-col items-center justify-center gap-6">
            <img
              className="rounded-lg"
              src="https://mangools.com/blog/wp-content/uploads/2019/07/learn-seo-new-t.png"
              alt="Image 1"
              width={560}
            ></img>
          </div>
        </div>
      </div>

      <div className="mx-4 w-full md:col-span-2">
        <h1 className="my-4 text-lg font-semibold">Najnowsze okazje!</h1>
        <div className="grid-col-1 my-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <section className="col-span-3 px-4">
        <h2 className="mb-6 text-lg font-semibold">Wyniki:</h2>
        <div className="flex w-full justify-center">
          <img src="/score.png" alt="Wynik" />
        </div>
      </section>
    </main>
  );
}
