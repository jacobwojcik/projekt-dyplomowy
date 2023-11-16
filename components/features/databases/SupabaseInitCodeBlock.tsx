import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import { initDb } from '@/lib/consts/codeBlocks';

const SupabaseInitCodeBlock = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-6 xl:mx-0">
      <div className="col-span-3 flex flex-col gap-4">
        <p>
          Aby zainicjalizować połączenie do bazy danych można użyć biblioteki{' '}
          <ExternalLink href="https://github.com/supabase/supabase-js">
            <Code>@supabase/supabase-js</Code>
          </ExternalLink>
          . Będziesz potrzebował jeszcze adresu URL oraz klucza API do
          autoryzacji żądań. Przechowaj je w twoim pliku <Code>.env</Code> z
          zmiennymi środowiskowymi.
        </p>
        <CodeBlock code={initDb} />
        <p>Brawo! Teraz możesz używać bazy danych w twojej aplikacji!</p>
      </div>
    </section>
  );
};

export default SupabaseInitCodeBlock;
