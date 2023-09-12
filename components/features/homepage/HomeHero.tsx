import { ButtonLink } from '../../ui/ButtonLink';

const HomeHero = () => {
  return (
    <div className="mx-auto flex h-[620px] w-full flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-8 text-5xl font-semibold">
        Next.js, czyli web w nowoczesnym wydaniu
      </h1>
      <h2 className="max-w-4xl">
        Next.js to nowoczesny, elastyczny framework Reacta do budowania
        aplikacji internetowych. Niezależnie od tego, czy budujesz prostą
        stronę, czy zaawansowaną aplikację, ten framework oferuje narzędzia,
        które umożliwiają efektywne wykorzystanie jego potencjału. Poniżej
        znajdziesz przykłady rozwiązań, które pokażą Ci, jak w pełni wykorzystać
        możliwości Next.js w praktyce.
      </h2>

      <div className="mt-6 flex gap-6">
        <ButtonLink href="#rendering">Renderowanie</ButtonLink>
        <ButtonLink light href="#optymalizacja">
          Optymalizacja
        </ButtonLink>
      </div>
    </div>
  );
};

export default HomeHero;
