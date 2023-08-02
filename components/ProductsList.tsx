import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { formatTime } from '@/lib/helpers';
import type { Product, Time } from '@/types';

import ProductItem from './ui/ProductItem';

interface Props {
  products: Product[];
  currentTime: Time;
}

const ProductsList = ({ products, currentTime }: Props) => {
  const time = formatTime(currentTime.datetime);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Lista produktów</CardTitle>
        <time>{currentTime?.datetime ? time : 'Loading...'}</time>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>
        {products.length ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <span>Loading...</span>
        )}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ProductsList;
