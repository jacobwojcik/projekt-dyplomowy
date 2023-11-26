import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import { isrRevalidate } from '@/lib/consts/codeBlocks';
import {
  dynamicLoading,
  imgComponent,
  nextFontGoogle,
  nextScripts,
  preloadFont,
} from '@/lib/consts/codeBlocks/optimization';
import React from 'react';

const OptimizeInstructions = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-4 2xl:mx-0">
      <h3 className="mt-4 mb-3 font-semibold text-lg">
        Jak ją zoptymalizować?
      </h3>
      <div className="col-span-3 flex flex-col gap-4">
        <ol className="ml-6 list-decimal flex flex-col gap-2">
          <li>
            <h4 className="font-semibold">
              Wybierz odpowiednią strategie renderowania
            </h4>
            <p>
              Większość podstrony na której się znajdujesz jest renderowana po
              stronie klienta. W celu uzyskania lepszych wyników SEO lepiej
              skorzystać z renderowania po stronie serwera.
            </p>
          </li>

          <li>
            <h4 className="font-semibold">Zdjęcia</h4>
            <p className="mb-3">
              Korzystaj z nowoczesnyych formatów takich jak WebP, AVIF. Używaj
              wbudowanego komponentu <Code>{'<Image/>'}</Code> zamiast natywnego{' '}
              {'<img/>'}, który dodatkowo optymalizuje multimedia.
            </p>
            <CodeBlock code={imgComponent} />
          </li>

          <li>
            <h4 className="font-semibold">Font</h4>
            <p className="mb-3">
              Używaj wstępnego ładowania ważnych czcionek, co przyspiesza ich
              wyświetlanie.
            </p>

            <CodeBlock code={preloadFont} />

            <p className="my-3">
              Wykorzystaj <Code>'next/font'</Code> do optymalizacji ładowania
              czcionek.
            </p>
            <CodeBlock code={nextFontGoogle} />
          </li>
          <li>
            <h4 className="font-semibold">Zewnętrzne skrypty</h4>
            <p className="mb-3">
              Blokowanie głównego wątku przeglądarki jest jednym z najczęstszych
              problemów wydajnościowych stron internetowych, zwłaszcza gdy na
              stronie jest wiele skryptów. Powinny być one ładowane
              asynchronicznie aby nie zablokować głownego wątku przeglądarki.
              Dobrym pomysłem jest również przerzucenie "odpowiedzialności" za
              ich ładowanie do Web Workera. W Next.js można użyć{' '}
              <Code>{'<Script/>'}</Code> z <Code>'next/script'</Code>
            </p>
            <CodeBlock code={nextScripts} highlight="1-10" />
          </li>
          <li>
            <h4 className="font-semibold">Lazy loading</h4>
            <p className="mb-3">
              Część komponentów które nie są widoczne odrazu po załadowaniu
              strony (na przykład rozwijalne menu) mogą być załadowane
              dynamicznie. Dzięki temu zmniejszasz ilość danych ładwanych na
              start przez przeglądarke.
            </p>
            <CodeBlock code={dynamicLoading} />
          </li>
        </ol>

        <p className="my-4">
          Powyższe wskazówki zostały wykorzystane do poprawienia wyników tej
          strony. Przejdź dalej żeby zobaczyć poprawioną wersję.
        </p>
      </div>
    </section>
  );
};

export default OptimizeInstructions;
