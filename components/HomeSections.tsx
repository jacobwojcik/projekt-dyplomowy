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
    href: '/renderowanie/ISR',
  },
];

const HomeSections = () => {
  return (
    <div className="my-6 text-center border border-zinc-200 w-full max-w-xl py-4 rounded-lg">
      <h2 className="text-md">Strategie renderowania</h2>
      <div className="flex justify-center gap-4 my-4">
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
