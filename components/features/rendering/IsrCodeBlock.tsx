import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import {
  dynamicOptions,
  fetchServerData,
  fetchWitchRevalidate,
  forceDynamic,
  isrRevalidate,
  ssgOption,
} from '@/lib/consts/codeBlocks';
import Link from 'next/link';

const IsrCodeBlock = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-6 2xl:mx-0">
      <div className="col-span-3 flex flex-col gap-4">
        <p>
          Aby rewalidować dane dla danego segmentu należy użyć opcji{' '}
          <Code>revalidate</Code>:
        </p>
        <CodeBlock code={isrRevalidate} highlight="1" />
        <p>
          Wszystkie żądania wykonanane w tym segmencie będą rewalidowane co 30
          sekund. Można również rewalidować konkretne dane poprzez rozbudowane
          opcje <Code>fetch</Code>. W poniższym przykładzie zapytanie jest
          odświeżane co godzinę:
        </p>
        <CodeBlock code={fetchWitchRevalidate} highlight="1" />
        <span>
          Jeśli chcesz dowiedzieć się więcej o opcjach rewalidacji, zajrzyj{' '}
          <Link href={`/renderowanie/cache`} className="font-medium underline">
            tutaj
          </Link>
          .
        </span>
      </div>
    </section>
  );
};

export default IsrCodeBlock;
