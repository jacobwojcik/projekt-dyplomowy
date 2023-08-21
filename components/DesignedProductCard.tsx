import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import type { ProductInfo } from '@/types';

import { Badge } from './ui/Badge';

interface Props {
  product: ProductInfo;
}

const DesignedProductCard = ({ product }: Props) => {
  const { name, description, category, imageurl, price, quantity } = product;
  return (
    <Card className="py-5 text-center">
      <CardHeader className="w-full py-0">
        <div className="flex items-center justify-between">
          <Badge className="h-max">{category.name}</Badge>
          <div className="flex">
            <span className="text-xs font-medium">Ilość:&nbsp;</span>
            <span className="text-xs text-zinc-600">{quantity}</span>
          </div>
        </div>
        <div className="relative h-[120px]">
          <Image
            fill
            src={imageurl ?? '/not-found'}
            objectFit="contain"
            alt={name}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-around gap-2 px-2 py-0">
        <div className="flex justify-between">
          <CardTitle className="text-sm">{name}</CardTitle>{' '}
        </div>
        <span className="text-xs text-zinc-500">{description}</span>

        <div className="flex gap-x-6">
          <div className="flex">
            <span className="text-xs font-medium text-zinc-600">
              Cena:&nbsp;
            </span>
            <span className="text-xs text-zinc-600 ">{price} PLN</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DesignedProductCard;
