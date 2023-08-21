import { getProducts } from '@/lib/queries';

import DesignedProductCard from '../DesignedProductCard';

const ProductsStreaming = async () => {
  const products = await getProducts(3);
  return (
    <div className="my-6 grid grid-cols-3 gap-6">
      {products.length ? (
        products.map((product) => (
          <DesignedProductCard key={product.id} product={product} />
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default ProductsStreaming;
