import { Card, CardContent } from '@/components/ui/Card';
import CodeBlock from '@/components/ui/CodeBlock';
import { componentDbCall } from '@/lib/consts/codeBlocks';

const ServerDataFetches = () => {
  return (
    <div className="mx-4 mt-6 mb-6 max-w-7xl xl:mx-0">
      <Card className="mb-6">
        <CardContent className="flex flex-col gap-2 mt-5">
          <p>
            Ponieważ w Next.js można tworzyć komponenty renderowane po stronie
            serwera, to możliwe jest pobranie danych bezpośrednio z komponentu,
            bez odpytywania dodatkowego endpointu. W taki właśnie sposób zostały
            pobrane produkty widoczne niżej. Możesz spróbować je przefiltrować,
            te zapytania zostaną już wykonane po stronie klienta - odpytując
            właściwy endpoint.
          </p>
        </CardContent>
      </Card>

      <CodeBlock code={componentDbCall} />
    </div>
  );
};

export default ServerDataFetches;
