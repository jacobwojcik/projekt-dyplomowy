import ProductCardLoader from './ProductCardLoader';

interface Props {
  items?: number;
}
const ProductListLoader = ({ items = 3 }: Props) => (
  <div className="my-6 grid grid-cols-3 gap-6">
    {Array.from({ length: items }).map((_, index) => (
      <ProductCardLoader key={index} />
    ))}
  </div>
);

export default ProductListLoader;
