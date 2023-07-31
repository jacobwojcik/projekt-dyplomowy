import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/CardNew';
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
        <time>{time}</time>
        {/* <CardDescription>{description}</CardDescription> */}
      </CardHeader>
      <CardContent>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ProductsList;
