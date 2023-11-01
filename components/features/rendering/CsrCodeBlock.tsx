import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import { csrUseClient, fetchData } from '@/lib/consts/codeBlocks';

const CsrCodeBlock = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-6 2xl:mx-0">
      <div className="col-span-3 flex flex-col gap-4">
        <p>
          W najnowszych wersjach Next.js używając rekomendowanego{' '}
          <ExternalLink
            name={"App Router'a"}
            href={'https://nextjs.org/docs/app'}
          />{' '}
          (folder <Code>/app</Code> w aplikacji) wszystkie podstrony i
          komponenty domyślnie renderowane są po stronie serwera (zobacz{' '}
          <ExternalLink
            href={`https://nextjs.org/docs/app/building-your-application/rendering/server-components`}
          >
            Server Components
          </ExternalLink>
          ). Aby wykonać kod po stronie klienta (przeglądarki) należy użyć
          dyrektywy <Code>'use client'</Code> na samej górze pliku.
        </p>
        <CodeBlock code={csrUseClient} highlight="1" />
        <p>
          Tak oznaczony komponent będzie wykonywał kod po stronie klienta.
          Poniższy przykład pokazuje użycie dobrze znanego z React'a{' '}
          <ExternalLink href={'https://react.dev/reference/react/useEffect'}>
            <Code>useEffect'u</Code>
          </ExternalLink>{' '}
          w celu pobrania danych.
        </p>
        <CodeBlock code={fetchData} startingLine={4} />
      </div>
    </section>
  );
};

export default CsrCodeBlock;
