import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import { csrUseClient, fetchData } from '@/lib/consts/codeBlocks';
import {
  itemsListComponent,
  slowSsr,
  streamingWithSuspense,
} from '@/lib/consts/codeBlocks/streaming';

const StreamingCodeBlock = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-6 2xl:mx-0">
      <div className="col-span-3 flex flex-col gap-4">
        <p>
          Załóżmy, że mamy podstronę która jest renderowana po stronie serwera i
          pobieramy na niej dane z dwóch źródeł a jedno zapytanie jest znacznie
          bardziej obciążające i w efekcie trwa dłużej niż pierwsze. Strona
          zostanie wyrenderowana dopiero gdy obydwa zapytania zostaną
          rozwiązane, więc użytkownika spotka dłuższy czas oczekiwania. Taka
          sytuacja występuje w przykładzie poniżej:
        </p>

        <CodeBlock code={slowSsr} />
        <p>
          Taką stronę można "przyśpieszyć" poprzez owrapowanie ciężkiego
          zapytania w komponent{' '}
          <ExternalLink href={'https://react.dev/reference/react/Suspense'}>
            <Code>Suspense</Code>
          </ExternalLink>
          . Suspense podczas wykonywania asynchronicznego zapytania pokazuje
          użytkownikowi zastępczy komponent jako <Code>fallback</Code> a
          finalnie zastępuje go poprzez docelowy komponent. Dane te są
          progresywnie przesyłane z serwera.
        </p>
        <CodeBlock code={streamingWithSuspense} highlight="12, 13, 14" />

        <p>A tak wygląda wydzielony komponent z "ciężkim" zapytaniem:</p>
        <CodeBlock code={itemsListComponent} />
      </div>
    </section>
  );
};

export default StreamingCodeBlock;
