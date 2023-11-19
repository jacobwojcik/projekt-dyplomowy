import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import { exampleRouteHandler } from '@/lib/consts/codeBlocks';

const FetchingData = () => {
  return (
    <>
      <Card className="mx-4 mt-6 mb-6 max-w-7xl xl:mx-0 ">
        <CardHeader>
          <CardTitle>Komunikacja z bazą danych</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>
            Next.js pozwala tworzyć własne API, nazywane{' '}
            <Code>Route Handler'ami</Code>. Aby stworzyć przykładowy endpoint,
            wystarczy stworzyć folder (którego nazwa będzię określała ścieżkę
            endpointu) z plikiem <Code>route.ts</Code> w folderze{' '}
            <Code>/app/api</Code>
          </p>
          <span>
            Na przykład w pliku <Code>/app/api/products/route.ts</Code> będzie
            znajdowała się logika odpowiadająca za obsługiwanie endpointu{' '}
            <Code>/api/products</Code>
          </span>
        </CardContent>
      </Card>
      <div className="mx-4 max-w-7xl xl:mx-0">
        {' '}
        <span className="inline-block mb-3">
          Plik <Code>/app/api/products/route.ts</Code>
        </span>
        <CodeBlock code={exampleRouteHandler} />
        <p className="mt-4">
          Teraz możemy wykorzystać go do pobrania produktów!
        </p>
      </div>
    </>
  );
};

export default FetchingData;
