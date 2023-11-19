export const fetchTimeTables = ` const newYorkDateTime = await fetch(
    'https://worldtimeapi.org/api/timezone/America/New_York',
    { next: { revalidate: 30 } }, // odśwież co 30 sekund
  );
  
  const warsawDateTime = await fetch(
    'https://worldtimeapi.org/api/timezone/Europe/Warsaw',
    { next: { revalidate: 10 } }, // odśwież co 10 sekund
  );;`



  export const dynamicOptionsDescribed =` /*
  * Domyślna opcja. Wszystkie możliwe zapytania są "cache'owane",
  * jednak nie zabrania to dynamicznych zachowań poszczególnym żądaniom.
  */
  export const dynamic = 'auto';
  
  /*
  * Wymusza dynamiczne renderowanie i pobieranie danych,
  * które rewalidowane są za każdym razem.
  */
  export const dynamic = 'force-dynamic';

  /*
  * Wymusza statyczne renderowanie i "cache'owanie" oraz zwraca puste wartości
  * dla dynamicznych funkcji (na przykład korzystających z ciasteczek)
  */
  export const dynamic = 'force-static';

  /*
  * Wymusza statyczne renderowanie i "cache'owanie" oraz wyrzuca błąd jeśli jakkikolwiek
  * komponent używa dynamicznych funkcji (na przykład korzysta z ciasteczek)
  * lub używa dynamicznych danych.
  */
  export const dynamic = 'error';
  `

  export const revalidateOptionsDescribed = `/*
  *  Domyślna wartość. Żądania nie są rewalidowane.
  */
  export const revalidate = false;
  
  /*
  *  Dane są rewalidowane za każdym razem.
  */
  export const revalidate = 0;

  /*
  *  Na przykład: 10, czas w sekundach ustalający częstotliwość rewalidacji
  */
  export const revalidate = number;

  /*
  * Wymusza "cache'owanie"
  */
  export const revalidate = 'force-cache';
  ` 

  export const fetchCacheOptions = `fetch('https://...', { cache: 'force-cache' | 'no-store' })
  
  /*
  *  'force-cache' - domyślna opcja, zapytania są "cache'owane"
  *  'no-store' - zapytanie jest rozwiązywanie dynamicznie i nie jest zapisywane w pamięci
  * /
  `



  export const fetchRevalidateOptions = `fetch('https://...', { next: { revalidate: false | 0 | number } })
  
  /*
  *  false - zapytanie są "cache'owane" na zawsze
  *  0 - zapytanie są dynamicznie rozwiązywane
  *  number - określa w sekundach częstotliwośc rewalidacji danych
  `


  export const fetchTagsOptions = `fetch('https://...', { next: { tags: ['tagId'] } })

  /*
  *  Oznacza zapytanie tagiem - "tagId".
  *  Zapytanie może być później zrewalidowane przez użycie "revalidateTag('tagId')"
  * /
  `