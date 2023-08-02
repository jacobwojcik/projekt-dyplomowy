import Image from 'next/image';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import type { Product } from '@/types';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="w-[260px] text-center">
      <CardHeader className="w-full">
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="justify-content flex flex-col items-center">
        <Image
          width={200}
          height={120}
          src={product.imageurl ?? '/not-found'}
          alt={product.name}
        />
        {product.description}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default ProductCard;
