import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';
import {
  cachedRequest,
  duplicatedRequest,
  rpcCall,
  sqlFunction,
} from '@/lib/consts/codeBlocks';
import { getCategoryProductSummary } from '@/lib/queries/getCategoryProductSummary';

const categoryTableHeaders = ['Kategoria', 'Ilość produktów', 'Wartość'];

const DatabasePerformance = async () => {
  const categoryProductSummary = await getCategoryProductSummary();
  return (
    <>
      <Card className="mx-4 mt-6 mb-6 max-w-7xl xl:mx-0">
        <CardHeader>
          <CardTitle>Wydajność baz danych</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p>
            Zapewnienie wydajności operacji na bazach danych w Next.js opiera
            się na zastosowaniu powszechnych sposobów optymalizacji zapytań.
            Można na nią wpływać poprzez ustalanie optymalnych struktur danych,
            partycjonowaniem oraz zastosowaniem indeksów. Next.js umożliwia
            natomiast cache'owania powtarzających się zapytań po stronie
            serwera. Zapytania z wykorzystaniem funkcji <Code>cache</Code> są
            automatycznie deduplikowane, czyli zapytanie wykona się tylko raz,
            unikając niepotrzebnego obciążania bazy danych.
          </p>
        </CardContent>
      </Card>

      <div className="mx-4 mt-6 mb-6 max-w-7xl xl:mx-0">
        <CodeBlock code={cachedRequest} />
        <span className="inline-block mt-3 mb-2">
          Pomimo wykonania żądania w 2 miejscach, zapytanie do bazy danych
          wykona się tylko raz.
        </span>
        <CodeBlock code={duplicatedRequest} />
      </div>

      <div className="mx-4 mt-6 mb-6 max-w-7xl xl:mx-0">
        <p>
          Wykorzystując w aplikacji <Code>Supabase</Code> wraz z biblioteką
          <Code>@supabase/supabase-js</Code> czasami jesteśmy ograniczeni przez
          jej API w wykonywaniu bardziej skomplikowanych zapytań. Załóżmy, że
          chcemy zdobyć informacje o ilości produktów w poszczególnych
          kategoriach oraz łączną wartość produktów w danej kategorii. Taka
          operacja wymaga grupowania, do ktorego możemy użyć funkcję SQL i
          wykorzystać <Code>supabase.rpc('function_name')</Code> aby ją wykonać.
        </p>
        <span className="inline-block mt-4 mb-2">Funkcja grupująca:</span>
        <CodeBlock code={sqlFunction} lang={'sql'} />

        <span className="inline-block mt-4 mb-2">
          Wykorzystanie przez supabase:
        </span>
        <CodeBlock code={rpcCall} lang={'sql'} />
        <span className="inline-block mt-4 mb-2">Zwrócony wynik:</span>
        <Table>
          <TableHeader>
            <TableRow>
              {categoryTableHeaders.map((header, index) => (
                <TableHead
                  key={index}
                  className="w-[75px] px-1 sm:w-[100px] sm:px-4"
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoryProductSummary?.map(
              ({ category_name, total_products, total_price }) => (
                <TableRow>
                  <TableCell className="">{category_name}</TableCell>
                  <TableCell>{total_products}</TableCell>
                  <TableCell>{total_price} PLN</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default DatabasePerformance;
