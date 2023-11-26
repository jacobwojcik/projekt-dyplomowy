import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import {
  dynamicOptions,
  dynamicOptionsDescribed,
  fetchCacheOptions,
  fetchRevalidateOptions,
  fetchTagsOptions,
  fetchTimeTables,
  revalidateOptionsDescribed,
} from '@/lib/consts/codeBlocks';

const CachingCard = () => {
  return (
    <Card className="mx-4 mt-6 max-w-7xl xl:mx-0 ">
      <CardHeader>
        <CardTitle>Kontrola nad danymi</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          Cachowanie danych pozwala oszczędzać zasoby (nikt nie lubi przepłacać
          za zewnętrzne usługi a możliwości sprzętowe również są ograniczone)
          oraz poprawić doznania użytkownika.
        </p>
        <p>Dane można kontrolować na kilka sposobów:</p>
        <div className="flex flex-col">
          <span className="font-medium">Route Segment Config</span>
          <span>
            Są to opcje które wpływają na działenie całego{' '}
            <ExternalLink href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts">
              <Code>Layout'u / Page'a</Code>
            </ExternalLink>
          </span>
          <ul className="ml-6 list-disc">
            <li className="mb-2" id="dynamic">
              <Code>dynamic</Code>- zmienia zachowanie strony na statyczne lub w
              pełni dynamiczne.
            </li>

            <CodeBlock
              code={dynamicOptionsDescribed}
              highlight="5, 11, 17, 24"
            />
            <li className="mb-2 mt-4">
              <Code>revalidate</Code>- ustala czas rewalidacji.
            </li>
            <CodeBlock
              code={revalidateOptionsDescribed}
              highlight="4, 9, 14, 19"
            />
          </ul>

          <span className="mt-4 mb-2 inline-block font-medium">Fetch API</span>
          <span>
            Next.js rozszerza natywne{' '}
            <span className="font-medium text-green-600">fetch()</span> API,
            umożliwiając każdemu żądaniu na serwerze ustawienie pożądanego
            zachowania:
          </span>
          <ul className="ml-6 list-disc">
            <li className="my-2">
              <Code>cache options</Code>
            </li>
            <CodeBlock code={fetchCacheOptions} highlight="1" />
            <li className="mb-2 mt-4">
              <Code>revalidate options</Code>
            </li>
            <CodeBlock code={fetchRevalidateOptions} highlight="1" />
            <li className="mb-2 mt-4">
              <Code>tags options</Code>
            </li>
            <CodeBlock code={fetchTagsOptions} highlight="1" />
          </ul>

          <span className="mt-3 inline-block">
            Po więcej szczegółów warto zajrzeć do{' '}
            <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating">
              dokumentacji
            </ExternalLink>
            .
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CachingCard;
