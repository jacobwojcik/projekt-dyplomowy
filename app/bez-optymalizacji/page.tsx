import './style.css';

import ProductCard from '@/components/ProductCard';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { getProducts } from '@/lib/queries';

export default async function Page() {
  const products = await getProducts();

  return (
    <main className="mx-auto my-6 flex max-w-7xl flex-col gap-8 md:grid md:grid-cols-3">
      <div className="flex flex-col gap-6 md:col-span-1">
        <Card className="w-full text-center">
          <CardHeader className="w-full">
            <CardTitle>Bez optymalizacji</CardTitle>
          </CardHeader>
          <CardContent className="justify-content flex flex-col items-center gap-6">
            <img
              src="https://edceah5uf5z.exactdn.com/wp-content/uploads/2023/02/kot.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt="Image 1"
              width={360}
            ></img>
            <span>
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
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>

      <div className="w-full md:col-span-2">
        <h1 className="text-lg font-semibold">Najnowsze okazje!</h1>
        <div className="grid-col-1 my-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
