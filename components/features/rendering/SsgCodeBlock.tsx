import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import { ssgOption } from '@/lib/consts/codeBlocks';
import Link from 'next/link';

const SsgCodeBlock = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-6 2xl:mx-0">
      <div className="col-span-3 flex flex-col gap-4">
        <p>
          Wykonywanie zapytań wygląda tak samo jak dla{' '}
          <Link href={`/renderowanie/ssr`} className="font-medium underline">
            SSR
          </Link>
          . Jedyną różnicą będzie opcja wybrana w{' '}
          <ExternalLink
            href={`https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config`}
          >
            <Code>Route Segment Config</Code>
          </ExternalLink>
          . Tak oznaczona strona zostanie wygenerowana podczas budowania
          aplikacji i nie będzie dodatkowo obciążała serwera. Oznacza to, że
          jeśli dane zmienią się po wygenerowaniu, to zmiany nie będą widoczne
          dla użytkownika.
        </p>
        <CodeBlock code={ssgOption} highlight="1" />
      </div>
    </section>
  );
};

export default SsgCodeBlock;
