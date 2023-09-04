import { getProducts } from '@/lib/queries';

import DesignedProductCard from '../DesignedProductCard';
const delay = async () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};

const ProductsStreamingLong = async () => {
  await delay();
  const products = await getProducts(3);

  return (
    <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {products.length &&
        products.map((product) => (
          <DesignedProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsStreamingLong;
