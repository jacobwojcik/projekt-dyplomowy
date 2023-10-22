import { Button } from '@/components/ui/Button';
import Code from '@/components/ui/Code';
import ExternalLink from '@/components/ui/ExternalLink';
import Image from 'next/image';
import PageRefresh from './PageRefresh';

const SsrNetwork = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 mx-6 2xl:mx-0">
      <div className="rounded-lg border bg-card shadow-sm w-full p-6">
        <p>
          Ponieważ strona jest prerenderowana po stronie serwera w zakładce{' '}
          <span className="font-semibold">Network</span> możemy podejrzeć
          jedynie wygenerowany HTML.
        </p>
        <p className="mb-2">
          Odśwież stronę (F5) lub kliknij przycisk aby sprawdzić zakładkę
          Network.
        </p>
        <PageRefresh />
      </div>
      <div>
        <Image
          src="/images/rendering/ssr-network.png"
          alt=""
          width={620}
          height={280}
          className="border rounded-lg"
        />{' '}
        <span className="text-xs">
          Zakładka <span className="font-semibold">Network</span> w
          przeglądarce.
        </span>
      </div>
    </section>
  );
};

export default SsrNetwork;
