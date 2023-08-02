export interface RenderingStrategiesInfo {
  title: string;
  description: string;
  pros: string[];
  cons: string[];
}

export const renderingStrategiesInfo: Record<string, RenderingStrategiesInfo> =
  {
    ssr: {
      title: 'SSR - Server Side Rendering',
      description:
        'Server Side Rendering (SSR), czyli renderowanie po stronie serwera, to technika pozwalająca na generowanie pełnych stron internetowych na serwerze, przed ich dostarczeniem do przeglądarki klienta. W przypadku użycia Next.js, SSR może być osiągnięte w prosty sposób dzięki wbudowanym funkcjom frameworku.',
      pros: [
        'Optymalizacja czasu ładowania',
        'Lepsze wsparcie dla SEO',
        'Ukrycie poufnych informacji',
      ],
      cons: [
        'Większe obciążenie serwera',
        'Mniejsza interaktywność',
        'Zwiększone zużycie zasobów',
      ],
    },
    csr: {
      title: 'CSR - Client Side Rendering',
      description:
        'Client-Side Rendering (CSR), czyli renderowanie po stronie klienta, to technika generowania stron internetowych, w której większość procesu renderowania odbywa się po stronie przeglądarki klienta, a nie na serwerze. W przeciwnym razie, w przypadku Server-Side Rendering (SSR), strony są generowane w całości na serwerze i dostarczane do przeglądarki klienta jako gotowy HTML.',
      pros: [
        'Interaktywność',
        'Separacja logiki frontendu i backendu:',
        'Rozsądne zarządzanie stanem',
      ],
      cons: [
        'Wydajność pierwszego ładowania',
        'SEO',
        'ZWydajność na urządzeniach mobilnych',
      ],
    },
    ssg: {
      title: 'SSG - Static Site Generation',
      description:
        'Static Site Generation (SSG) to technika, która umożliwia generowanie pełnych stron internetowych na serwerze w trakcie procesu budowania strony, przed jej dostarczeniem do przeglądarki klienta. W przypadku użycia frameworku Next.js, statyczne generowanie stron może być osiągnięte w prosty sposób dzięki wbudowanym funkcjom tego frameworku.',
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
        'Incremental Static Regeneration (ISR), czyli Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id metus ipsum. Quisque condimentum libero ac pretium facilisis. Integer consectetur egestas purus, eu rhoncus ligula eleifend et. Duis accumsan pharetra cursus. Etiam tempus neque dolor, ac condimentum ante scelerisque vitae. In posuere ultricies tincidunt.',
      pros: [
        'Łączy w sobie zalety SSR i SSG',
        'OPtymalizacja SEO',
        'Czas ładowania',
      ],
      cons: [
        'Brak aktualnych zasobów',
        'Dłuższy czad generowania',
        'Mniejsza interkatywność',
      ],
    },
  };