import Image from 'next/image';
import React from 'react';

const SeoResults = () => {
  return (
    <div className="mx-4 xl:mx-0">
      <h3 className="my-4">Wyniki obecnej podstrony:</h3>
      <div className="w-full grid grid-col-1 xl:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Image
            src={'/images/seo-1.png'}
            alt={'Wyniki seo'}
            sizes="100vw"
            width={900}
            height={500}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="p-6 border rounded-md"
          />
          <Image
            src={'/images/seo-2.png'}
            alt={'Wyniki seo'}
            sizes="100vw"
            width={300}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className="p-6 border rounded-md"
          />
          <a
            href="https://pagespeed.web.dev/analysis/https-jw-praca-dyplomowa-vercel-app-z-optymalizacja/e8cflyml5h?form_factor=mobile"
            className="font-medium underline text-sm my-2 inline-block"
          >
            Link do wyników
          </a>
        </div>
        <div className="w-full xl:px-6">
          <p className="my-3">
            Test został przeprowadzony przy użyciu{' '}
            <a
              className="font-medium underline text-sm my-2 inline-block"
              href="https://pagespeed.web.dev/"
            >
              PageSpeed Insights
            </a>
            . Składa się on z kilku metryk:
          </p>
          <ol className="list-decimal pl-8">
            <li>
              <span className="font-semibold">First Contenful Paint (FCP)</span>{' '}
              - oznacza czas, w którym po raz pierwszy pojawia się tekst lub
              obraz na stronie.
            </li>
            <li>
              Largest Contentful Paint (LCP) - oznacza czas, w którym największy
              tekst lub obraz jest wyświetlany na stronie.
            </li>
            <li>
              Total Blocking Time (TBT) - suma wszystkich okresów czasu między
              FCP a czasem do interaktywności, wyrażona w milisekundach jeśli
              długość zadania przekroczyła 50 ms.
            </li>
            <li>
              Cumulative Layout Shift (CLS) - mierzy przesunięcie widocznych
              elementów w obrębie widocznego obszaru strony.
            </li>
            <li>
              Speed Index - pokazuje, jak szybko zawartość strony jest widocznie
              wypełniana.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SeoResults;
