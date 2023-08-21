import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';

const ProductCardLoader = () => {
  return (
    <Card className="py-5 text-center">
      <CardHeader className="w-full py-0">
        <div className="flex items-center justify-between">
          <Skeleton className="h-[20px] w-[80px] rounded-full" />
          <div className="flex">
            <Skeleton className="h-[20px] w-[60px] rounded-full" />
          </div>
        </div>
        <div className="relative flex h-[120px] items-center justify-center">
          <Skeleton className="h-[100px] w-[180px] rounded-lg" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-around gap-2 px-2 py-0">
        <div className="flex justify-between">
          <Skeleton className="h-[20px] w-[180px] rounded-full" />
        </div>
        <Skeleton className="h-[20px] w-[180px] rounded-full" />
        <div className="flex gap-x-6">
          <div className="mt-3 flex">
            <Skeleton className="h-[20px] w-[100px] rounded-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardLoader;
