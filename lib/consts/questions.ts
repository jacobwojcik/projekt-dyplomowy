export const questions = [

  {
    question: 'Kiedy warto stosować pre-rendering w celu optymalizacji SEO?',
    answers: ['Gdy chcemy aby zawartość renderowana była po stronie klienta', 
    'Gdy zależy nam na lepszym indeksowaniu przez wyszukiwarki',
    'Gdy zawartość strony nie powinna być widoczna dla robotów wyszukiwarek',
    'Gdy chcemy spowolnić działanie naszej strony'],
    correctAnswer: 1,
  },
  
    {
      question: 'Technika renderowania w której strona generowana jest po stronie klienta to?',
      answers: ['SSR (Server Side Rendering)', 'SSG (Static Site Generation)', 'ISR (Incremental Static Regeneration)', 'CSR (Client Side Rendering)'],
      correctAnswer: 3,
    },

    {
      question: 'Którą technike renderowania warto wybrać, gdy zawartość strony jest statyczna i nie zmienia się?',
      answers: ['SSR (Server Side Rendering)', 'SSG (Static Site Generation)', 'ISR (Incremental Static Regeneration)', 'CSR (Client Side Rendering)'],
      correctAnswer: 1,
    },

    {
      question: 'Incremental Static Regeneration:',
      answers: ['Renderuje stronę po stronie klienta', 'Nie pozwala na rewalidacje strony', 'Łączy w sobie zalety SSR i SSG', 'Ma zły wpływ na wynik SEO'],
      correctAnswer: 2,
    },

    {
      question: 'Jak rewalidowana może być strona przy użyciu Next.js?',
      answers: ['Rewalidacja może być oparta na czasie oraz na żądanie', 'Rewalidacja może być oparta tylko na czasie', 'Rewalidować można tylko na żądanie', 'Nie można rewalidować treści przy użyciu Next.js'],
      correctAnswer: 0,
    },

    {
      question: "Jak zmienia zachowanie strony opcja: export const dynamic = 'force-dynamic'? ",
      answers: ['Wymusza statyczne renderowanie i cachowanie strony', 'Pozwala użyć dynamicznych animacji ', '"Cache\'uje" stronę', 'Wymusza dynamiczne renderowanie i pobieranie treści'],
      correctAnswer: 3,
    },

    {
      question: 'Jak można poprawić wydajność strony?',
      answers: ['Zwiększyć rozmiar obrazków', 'Użyć dużej liczby skryptów zewnętrznych', 'Asynchronicznie ładując skrypty zewnętrzne', 'Zrezygnowanie z użycia metatagów'],
      correctAnswer: 2,
    },

    {
      question: 'Jak można zoptymalizować obrazki przy użyciu Next.js?',
      answers: ['Zawsze używać standardowego tagu <img />', "Używając komponentu <Image />  z 'next/image'", "Poprzez komponent <Script/> z 'next/script' ", 'Zawsze używać formatu PNG'],
      correctAnswer: 1,
    },

    {
      question: 'Na co pozwala Streaming w Next.js?',
      answers: ['Pozwala podzielić strone na mniejsze części i progresywnie przesyłać je z serwera do klienta', "Pozwala wydłużyć czas ładowania strony", "Pozwala na użycie dodatkowych skryptów", 'Pozwala na rewalidacje treści'],
      correctAnswer: 0,
    },

    {
      question: 'Którego narzędzia warto użyć aby przetestować wydajność strony oraz wyniki pod kątem SEO?',
      answers: ['Playwright', 'Jest', 'Google Sheets', 'PageSpeed Insights'],
      correctAnswer: 3,
    },
    
  ];