import type { RenderingStrategiesInfo } from '@/types';

export const renderingStrategiesInfo: Record<string, RenderingStrategiesInfo> =
  {
    ssr: {
      title: 'SSR - Server Side Rendering',
      description:
        'Server Side Rendering (SSR), czyli renderowanie po stronie serwera, to technika pozwalająca na generowanie pełnych stron internetowych na serwerze, przed ich dostarczeniem do przeglądarki klienta. Jest to szczególnie przydatne w przypadku aplikacji internetowych, w których dane zmieniają się często oraz wymagają optymalizacji pod kątem SEO. W tym przypadku żądania również rozwiązywane są dynamicznie, ale po stronie serwera i przed załadowaniem strony. Widoczny czas nad listą produktów określa godzinę w której strona zastała wygenerowana na serwerze. ',
      pros: [
        'Szybsze wyświetlanie treści dla użytkownika',
        'Lepsze wsparcie dla SEO',
        'Ukrycie poufnych informacji',
      ],
      cons: [
        'Większe obciążenie serwera',
        'Mniejsza interaktywność',
        'Wolniejszy czas pierwszego ładowania',
      ],
    },
    csr: {
      title: 'CSR - Client Side Rendering',
      description:
        `Client-Side Rendering (CSR), czyli renderowanie po stronie klienta, polega na generowaniu treści strony bezpośrednio w przeglądarce użytkonika. Klient wysyła żądanie do serwera o minimalny plik HTML, który zawiera niezbędne pliki JavaScript i CSS. Gdy klient wczytuje pliki, kod JavaScript jest wykonywany, co powoduje wyrenderowanie treści w przeglądarce. Wtedy strona staje się widoczna i w pełni interaktywna.
         Czas widoczny nad listą produktów określa moment w którym dane zostały załadowane na stronę. CSR powinno używać się w dynamicznych aplikacjach,  w których nie zależy nam na dobrym wyniku SEO (Search Engine Optimization - proces optymalizacji strony internetowej w celu poprawy jej widoczności w wynikach wyszukiwania). Przykładem może być panel administratora lub aplikacja społecznościowa.`,
      pros: [
        'Szybkość',
        'Interaktywność',
        'Separacja logiki frontendu i backendu',
      ],
      cons: [
        'Wydajność pierwszego ładowania',
        'Problematyczne SEO',
        'Większe obciążenie dla użytkownika',
      ],
    },
    ssg: {
      title: 'SSG - Static Site Generation',
      description:
        'Static Site Generation (SSG) to technika, która umożliwia generowanie pełnych stron internetowych na serwerze w trakcie procesu budowania strony, przed jej dostarczeniem do przeglądarki klienta. Strona jest w pełni statyczna, to znaczy, że dane widoczne na niej zasoby zostały pobrane podczas jej generowania. Widoczny czas to godzina wygenerowania strony. SSG jest idealny do stron które sie nie zmieniają i cała zawartość może być  wygenerowana w momencie budowania projektu.',
      pros: ['Wydajność', 'Bezpieczeństwo', 'Optymalizacja dla SEO'],
      cons: [
        'Czas generowania',
        'Aktualizacje danych',
        'Ograniczona interaktywność',
      ],
    },
    isr: {
      title: 'Incremental Static Regeneration',
      description:
        'Incremental Static Regeneration (ISR), czyli ulepszone SSG. Jest to metoda, która umożliwia generowanie i regenerację statycznych stron internetowych. Ma znaczącą przewagę nad stronami w pełni statycznymi ponieważ, dane mogę być odświeżane co pewien czas. W tym przypadku można zauważyć, że czas jest regenrowany co 30 sekund. Spróbuj odświeźyć stronę, aby zobaczyć aktualny czas. ISR często wykorzystywane jest na stronach na których treśći odświeżane są co pewien, określony czas, np. wpisy na blogu.',
      pros: [
        'Łączy w sobie zalety SSR i SSG',
        'Optymalizacja SEO',
        'Czas ładowania',
      ],
      cons: [
        'Brak aktualnych zasobów',
        'Dłuższy czas generowania',
        'Mniejsza interaktywność',
      ],
    },
  };

export const nextFeaturesInfo: Record<string, RenderingStrategiesInfo> = {
  streaming: {
    title: 'Streaming + Suspense',
    description: `Streaming umożliwia częściowe renderowanie i przesyłanie elementów interfejsu użytkownika z serwera do klienta. W rezultacie użytkownik może natychmiastowo zobaczyć i korzystać z kluczowych fragmentów strony, podczas gdy pozostała treść jest nadal ładowana. To pozwala uniknąć oczekiwania na pełne załadowanie całej strony przed możliwością interakcji. 
      W tym przypadku czas pobierania produktów z drugiego rzędu jest sztucznie wydłużony, korzystajac z "streamingu" użytkownik nie musi czekać aż to żądanie (które wykonywane jest po stronie serwera) zostanie zakończone!
      `,
    content: `<span><code class='bg-zinc-100/50 text-green-500 text-sm py-1 px-2 rounded-lg'>&lt;Suspense&gt;</code> działa poprzez owrapowanie komponentu, który wykonuje asynchroniczną akcję (np. pobieranie danych), prezentując jednocześnie interfejs zastępczy - loader - podczas trwania akcji, po czym automatycznie zamienia się na właściwy komponent po jej zakończeniu.</span>`,
  },
};
