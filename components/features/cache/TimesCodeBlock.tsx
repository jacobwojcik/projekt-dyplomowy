import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import { fetchTimeTables } from '@/lib/consts/codeBlocks';
import Link from 'next/link';

const TimesCodeBlock = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-6 2xl:mx-0">
      <div className="col-span-3 flex flex-col gap-4">
        <p>
          Dane są odświeżane przez użycie opcji <Code>revalidate</Code>.
          Wykonane żadania wyglądaja mnie więcej tak:
        </p>
        <CodeBlock code={fetchTimeTables} />
      </div>
    </section>
  );
};

export default TimesCodeBlock;
