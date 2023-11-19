import { Card, CardContent, CardTitle } from '@/components/ui/Card';

const seo = [
  {
    title: 'Rendering',
    content:
      'Czy treść powinna być renderowana po stronie klienta czy serwera? Jeśli zależy Ci na SEO, wybierz SSR, ponieważ treść jest już gotowa przy pierwszym ładowaniu strony. SSG jest doskonałe dla statycznych stron z rzadko aktualizowaną treścią. ISR łączy zalety SSG i SSR, umożliwiając regenerację statycznych stron na żądanie. Wybór zależy od twoich potrzeb.',
  },
  {
    title: 'Zdjęcia',
    content:
      'Używaj nowoczesnych formatów zapewniających lepszą kompresję, takich jak WebP czy AVIF. Korzystając z Next.js zamiast standardowego tagu <img>, użyj <Image/>, definiując atrybuty takie jak width i height. Komponent ten obsługuje leniwe ładowanie obrazów, poprawiając wydajność. Możesz także konfigurować zewnętrzne źródła obrazów.',
  },
  {
    title: 'Font',
    content:
      'Używaj preload w tagu <link> do wstępnego ładowania ważnych czcionek, co przyspiesza ich wyświetlanie. Unikaj ładowania zbędnych wariantów czcionki, by zmniejszyć czas ładowania. Użyj font-display: optional lub font-display: swap, aby kontrolować wyświetlanie tekstu podczas ładowania czcionki. Zintegruj czcionki z next/font w Next.js, by dodatkowo poprawić wydajność.',
  },
  {
    title: 'Skrypty',
    content:
      'Ładuj zewnętrzne skrypty asynchronicznie aby nie blokować głównego wątku. Używaj atrybutu async lub defer przy dodawaniu skryptu do strony. W Next.js użyj tagu <Script/> wraz z odpowiednią strategią ładowania, przemyśl przeniesienie skryptu do Web Workera.',
  },
  {
    title: 'Lazy loading',
    content:
      'W Next.js możesz zastosować lazy loading na dwa sposoby: za pomocą dynamicznych importów z next/dynamic oraz za pomocą  Suspense. Domyślnie, komponenty serwerowe są automatycznie dzielone na fragmenty, natomiast lazy loading odnosi się głównie do komponentów klienta. Za pomocą next/dynamic możemy także określić, czy komponent ma być renderowany po stronie serwera czy nie, oraz dodawać niestandardowe komponenty ładowania.',
  },
  {
    title: 'Jak testować?',
    content:
      'Podstawowymi narzędziami do testowania wydajności stron są: Lighthouse - wbudowany w przeglądarke, dzięki któremu można ocenić jakość strony pod względem wydajności i SEO, PageSpeed Insights oferuje sugestie dotyczące poprawy czasu ładowania. Regularne korzystanie z tych narzędzi zapewnia lepszą widoczność w wynikach wyszukiwania i lepsze doświadczenie użytkownika.',
  },
];

const SeoCards = () => {
  return (
    <div className="mx-4 xl:mx-0">
      <h3 className="my-4 text-lg font-semibold">Od czego zacząć?</h3>

      <div className="my-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {seo.map(({ title, content }, index) => (
          <>
            <Card className="flex w-full flex-col items-center gap-4 py-8">
              <CardTitle>
                {index + 1}.{title}
              </CardTitle>
              <CardContent className="text-sm">{content}</CardContent>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default SeoCards;
