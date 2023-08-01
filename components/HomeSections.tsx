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
    <div className="my-6 w-full max-w-xl rounded-lg border border-zinc-200 py-4 text-center">
      <h2 className="text-md">Strategie renderowania</h2>
      <div className="my-4 flex justify-center gap-4">
        {renderingStrategies.map(({ name, href }) => (
          <ButtonLink key={href} href={href}>
            {name}
          </ButtonLink>
        ))}
      </div>
    </div>
  );
};

export default HomeSections;
