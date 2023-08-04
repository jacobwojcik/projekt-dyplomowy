import Image from 'next/image';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import type { ProductInfo } from '@/types';

interface Props {
  product: ProductInfo;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="text-center sm:w-[260px]">
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
