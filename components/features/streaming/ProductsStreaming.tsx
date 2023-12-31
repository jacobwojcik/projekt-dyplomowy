import { getProducts } from '@/lib/queries';

import ProductCard from '../../shared/ProductCard';

const ProductsStreaming = async () => {
  const products = await getProducts(3);
  return (
    <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {products.length ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default ProductsStreaming;
