import { ButtonLink } from './ui/ButtonLink';

const renderingStrategies: { name: string; href: string }[] = [
  {
    name: 'CSR',
    href: '/renderowanie/csr',
  },
  {
    name: 'SSR',
    href: '/renderowanie/ssr',
  },
  {
    name: 'SSG',
    href: '/renderowanie/ssg',
  },
  {
    name: 'ISR',
    href: '/renderowanie/isr',
  },
];

const HomeSections = () => {
  return (
    <div className="my-6 w-full max-w-xl rounded-lg border border-zinc-200 p-4 text-center">
      <h2 className="text-md">Strategie renderowania</h2>
      <div className="my-4 flex justify-center gap-4">
        {renderingStrategies.map(({ name, href }) => (
          <ButtonLink key={href} href={href}>
            {name}
          </ButtonLink>
        ))}
      </div>
      <span className="my-2 block w-full border-b border-zinc-200"></span>

      <span>Optymalizacja pod kątem SEO</span>
      <div className="my-4 flex justify-center gap-4">
        <ButtonLink href={`/bez-optymalizacji`}>Bez optymalizacji</ButtonLink>
        <ButtonLink href={`/z-optymalizacja`}>Z optymalizacją</ButtonLink>
      </div>
    </div>
  );
};

export default HomeSections;
