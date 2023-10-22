import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import {
  dynamicOptions,
  fetchServerData,
  forceDynamic,
} from '@/lib/consts/codeBlocks';
import Link from 'next/link';

const SsrCodeBlock = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-6 2xl:mx-0">
      <div className="col-span-3 flex flex-col gap-4">
        <p>
          Aby wykonać zapytanie po stronie serwera można użyć natywnego{' '}
          <ExternalLink
            href={`https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API`}
          >
            <Code>fetch</Code> Web Api
          </ExternalLink>{' '}
          lub innej zewnętrznej biblioteki.
        </p>
        <CodeBlock code={fetchServerData} />
        <p>
          Next.js poprawia wydajność aplikacji poprzez możliwość cache'owania
          (zapisanie danych dla szybszego dostępu) zapytań i danych. Domyślnie
          wszystkie zapytania są cachowane. Można dostosować to zachowanie
          poprzez opcje
          <ExternalLink
            href={`https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config`}
          >
            <Code>Route Segment Config</Code>
          </ExternalLink>{' '}
          które szerzej opisane są w{' '}
          <Link
            href={`/renderowanie/next-13`}
            className="font-medium underline"
          >
            innej sekcji
          </Link>
          . Aby 'świeże' dane były pobierane przy każdym wejściu na stronę,
          trzeba użyć opcji <Code>'force-dynamic'</Code>.
        </p>
        <CodeBlock code={forceDynamic} highlight="1" />
        <p>Pozostałe opcje to:</p>
        <CodeBlock code={dynamicOptions} />
        <p>
          Sprawdź jak działają{' '}
          <Link
            href={`/renderowanie/next-13`}
            className="font-medium underline"
          >
            tutaj
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SsrCodeBlock;
