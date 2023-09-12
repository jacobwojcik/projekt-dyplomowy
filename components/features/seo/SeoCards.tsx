import { Card, CardContent, CardTitle } from '@/components/ui/Card';

const seo = [
  { title: 'Rendering' },
  { title: 'Zdjęcia' },
  { title: 'Font' },
  { title: 'Skrypty' },
  { title: 'Lazy loading' },
  { title: 'Jak testować?' },
];

const SeoCards = () => {
  return (
    <div className="mx-4 xl:mx-0">
      <h3 className="my-4 text-lg font-semibold">Od czego zacząć?</h3>

      <div className="my-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {seo.map(({ title }, index) => (
          <>
            <Card className="flex h-[260px] w-full flex-col items-center justify-center gap-4">
              <CardTitle>
                {index + 1}.{title}
              </CardTitle>
              <CardContent>TBD</CardContent>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default SeoCards;
