import { getProducts } from '@/lib/queries';

import ProductCard from '../../shared/ProductCard';

const delay = async () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};

const ProductsStreamingLong = async () => {
  await delay();
  const products = await getProducts(3, 3);

  return (
    <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {products.length &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default ProductsStreamingLong;
