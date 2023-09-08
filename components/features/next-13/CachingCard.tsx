import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Code from '@/components/ui/Code';

const CachingCard = () => {
  return (
    <Card className="mx-4 mt-6 max-w-7xl xl:mx-0 ">
      <CardHeader>
        <CardTitle>Kontrola nad danymi</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          Przetrzymywanie danych w pamięci podręcznej pozwala oszczędzać zasoby
          (nikt nie lubi przepłacać za zewnętrzne usługi a możliwości sprzętowe
          również są ograniczone).
        </p>
        <p>Dane można kontrolować na wiele sposobów:</p>
        <div className="flex flex-col">
          <span className="font-medium">Route Segment Config</span>
          <ul className="ml-6 list-disc">
            <li>
              <Code>
                <>
                  <span className="text-black">export const</span>{' '}
                  <span className="text-blue-500">dynamic</span>{' '}
                  <span className="text-black">=</span> &apos;auto&apos; |
                  &apos;force-dynamic&apos; | &apos;error&apos; |
                  &apos;force-static&apos;
                </>
              </Code>
              - zmienia zachowanie strony na statyczne lub w pełni dynamiczne.
            </li>
            <li>
              <Code>
                <>
                  <span className="text-black">export const</span>{' '}
                  <span className="text-blue-500">revalidate</span>{' '}
                  <span className="text-black">=</span> false |
                  &apos;force-cache&apos; | 0 | number
                </>
              </Code>
              - ustala czas rewalidacji.
            </li>
            <li> i kilka innych</li>
          </ul>

          <span className="mt-2 inline-block font-medium">Fetch API</span>
          <span>
            Next.js rozszerza natywne{' '}
            <span className="font-medium text-green-600">fetch()</span> API,
            umożliwiając każdemu żądaniu na serwerze ustawienie pożądanego
            zachowania:
          </span>
          <ul className="ml-6 list-disc">
            <li>
              <Code>
                <>
                  <span className="text-blue-500">fetch</span>
                  <span className="text-black">
                    {"('https://...', { cache: "}
                  </span>{' '}
                  <span className="text-green-500">
                    &apos;force-cache&apos; | &apos;no-store&apos;
                  </span>{' '}
                  <span className="text-black">{' })'}</span>
                </>
              </Code>
              - konfiguruje jak żądanie powinno działać z Next.js Data Cache.
            </li>
            <li>
              <Code>
                <>
                  <span className="text-blue-500">fetch</span>
                  <span className="text-black">
                    {"('https://...', { next: { revalidate: "}
                  </span>{' '}
                  <span className="text-green-500">false | 0 | number</span>{' '}
                  <span className="text-black">{' } })'}</span>
                </>
              </Code>
              - ustala czas przechowywania pamięci podręcznej zasobu (w
              sekundach).
            </li>
            <li>
              <Code>
                <>
                  <span className="text-blue-500">fetch</span>
                  <span className="text-black">
                    {"('https://...', { next: { tags: "}
                  </span>{' '}
                  <span className="text-green-500">[&apos;tagId&apos;]</span>{' '}
                  <span className="text-black">{' } })'}</span>
                </>
              </Code>
              - ustala tag dzięki któremu dane mogą zostać zrewalidowane na
              żądanie.
            </li>
          </ul>

          <span className="mt-3 inline-block">
            Przytoczone tutaj przykłady to tylko kilka najważniejszych
            możliwości, po szczegóły warto zajrzeć do{' '}
            <a
              href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating"
              target="_blank"
              className="font-medium underline"
            >
              dokumentacji
            </a>
            .
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CachingCard;
