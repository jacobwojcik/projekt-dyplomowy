import { getProducts } from '@/lib/queries';

import ProductItem from '../ui/ProductItem';
const delay = async () => {
  return new Promise((resolve) => setTimeout(resolve, 6000));
};

const ProductsStreamingLong = async ({ limit = 8 }) => {
  await delay();
  const products = await getProducts(limit);
  return (
    <div className="w-full">
      {products.length ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default ProductsStreamingLong;
