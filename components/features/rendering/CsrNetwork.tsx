import { Button } from '@/components/ui/Button';
import Code from '@/components/ui/Code';
import ExternalLink from '@/components/ui/ExternalLink';
import Image from 'next/image';

const CsrNetwork = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 mx-6 2xl:mx-0">
      <div className="rounded-lg border bg-card shadow-sm w-full p-6">
        <p>
          Po zainicjowaniu strony, skrypty JavaScript mogą wykonywać dodatkowe
          asynchroniczne żądania do serwera (np. za pomocą{' '}
          <ExternalLink
            name="AJAX"
            href="https://www.w3schools.com/js/js_ajax_intro.asp"
            className="!m-0"
          />{' '}
          lub{' '}
          <ExternalLink
            name="fetch"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
            className="!m-0"
          />{' '}
          ) w celu pobrania danych niezbędnych do wyświetlenia treści. Dzięki
          temu strona może być dynamicznie aktualizowana bez konieczności
          przeładowania. Żądania te każdy użytkownik może podejrzeć w zakładce{' '}
          <span className="font-semibold">Network</span> przeglądarki (obrazek
          po prawej). Na obecnej stronie zostały tak zwrócone dane o produktach
          (<Code>products</Code>), czasie (<Code>Poland</Code>) oraz artykułach
          (<Code>posts</Code>).
        </p>
        <p className="mb-2">
          Odśwież stronę (F5) lub kliknij przycisk by zobaczyć szkielet
          ładowania oraz podejrzeć dane w zakładce Network.
        </p>
        <Button onClick={reloadPage}>Odśwież</Button>
      </div>
      <div>
        <Image
          src="/images/rendering/csr-network.png"
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

export default CsrNetwork;
