import { getProducts } from '@/lib/queries';

import ProductItem from '../ui/ProductItem';

const ProductsStreaming = async ({ limit = 8 }) => {
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

export default ProductsStreaming;
