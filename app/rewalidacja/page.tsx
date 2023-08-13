import AddProductForm from '@/components/AddProductForm';
import { getCategories } from '@/lib/queries';

export default async function Page() {
  const categories = await getCategories();
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <AddProductForm options={categories} />
    </div>
  );
}
