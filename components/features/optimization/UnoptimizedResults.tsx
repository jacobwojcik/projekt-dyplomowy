'use client';
import ExternalLink from '@/components/ui/ExternalLink';
import React from 'react';

const UnoptimizedResults = () => {
  return (
    <section className="col-span-3 px-4 my-4">
      <h1 className="mb-6 text-lg font-semibold">Wyniki obecnej podstrony</h1>
      <div className="w-full grid grid-col-1 xl:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <span>
            Wynik w{' '}
            <ExternalLink
              name="PageSpeed Insights"
              href="https://pagespeed.web.dev/"
            />
          </span>
          <img
            src="/images/unoptimized-seo-1.png"
            className="p-6 border rounded-md"
          />
          <img
            src="/images/unoptimized-seo-2.png"
            className="p-6 border rounded-md"
          />
          <ExternalLink
            name=" Link do wyników"
            href="https://pagespeed.web.dev/analysis/https-jw-praca-dyplomowa-vercel-app-bez-optymalizacji/mw5rpezhr8?form_factor=mobile"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="my-2">
            Wynik w Lighthouse (narzędzie wbudowane w przeglądarke):
          </span>
          <img
            src="/images/unoptimized-seo-lighthouse-1.png"
            className="p-6 border rounded-md"
          />
          <img
            src="/images/unoptimized-seo-lighthouse-2.png"
            className="p-6 border rounded-md"
          />
        </div>
      </div>

      <div className="my-6">
        <p>
          Korzystając z wyżej wymienionych narzędzie dostajemy również
          podpowiedzi w jaki sposób poprawić wydajnośc danej strony. Na przykład
          przy obecnym przykładzie wyglądają one następująco:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-2">
          {' '}
          <img
            src="/images/opportunities.png"
            className="p-6 border rounded-md"
          ></img>
          <img
            src="/images/diagnostics.png"
            className="p-6 border rounded-md"
          ></img>
        </div>

        <p>
          Dzięki nim można łatwo zidentyfikować słabe strony pod względem
          wydajności i prędkości ładowania
        </p>
      </div>
    </section>
  );
};

export default UnoptimizedResults;
