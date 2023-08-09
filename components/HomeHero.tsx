import { ButtonLink } from './ui/ButtonLink';

const HomeHero = () => {
  return (
    <div className="mx-auto flex h-[620px] w-full flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-8 text-5xl font-semibold">Witaj przybyszu!</h1>
      <h2 className="max-w-4xl">
        Ta aplikacja to przewodnik, który umożliwia zgłębianie różnych technik
        renderowania i strategii optymalizacji w Next.js. Celem tej aplikacji
        jest zaprezentowanie różnych technik renderowania stron internetowych
        oraz optymalizacji nowoczesnych aplikacji.
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
