import Code from '@/components/ui/Code';
import CodeBlock from '@/components/ui/CodeBlock';
import ExternalLink from '@/components/ui/ExternalLink';
import { csrUseClient, fetchData } from '@/lib/consts/codeBlocks';
import { revalidatePath } from '@/lib/consts/codeBlocks/revalidation';
import {
  itemsListComponent,
  slowSsr,
  streamingWithSuspense,
} from '@/lib/consts/codeBlocks/streaming';

const RevalidationCodeBlock = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-4 mx-6 2xl:mx-0">
      <div className="col-span-3 flex flex-col gap-4">
        <p>
          Jest to możliwe poprzez wykorzystanie <Code>revalidatePath</Code>{' '}
          które wywoływane jest podczas dodawania nowego zadanie po stronie
          serwera.
        </p>

        <CodeBlock code={revalidatePath} />
      </div>
    </section>
  );
};

export default RevalidationCodeBlock;
