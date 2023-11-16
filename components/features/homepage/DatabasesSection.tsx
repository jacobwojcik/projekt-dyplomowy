import React from 'react';

import { ButtonLink } from '../../ui/ButtonLink';

const DatabasesSection = () => {
  return (
    <div className="flex min-h-[660px] flex-col items-center justify-center bg-white px-4 py-8">
      <div className="flex max-w-5xl">
        <div>
          <h2 className="text-center text-3xl font-semibold">
            Bazy danych i jak się do nich dostać?{' '}
          </h2>
          <div className="flex flex-col items-center my-5 p-6 max-w-5xl">
            <span className="text-center">
              Next.js pozwala na tworzenie full-stackowych (czyli łączących w
              sobie frontend i backend) aplikacji webowych. Jak wybrać właściwą
              baze danych? W jaki sposób można pobierać dane?
            </span>

            <ButtonLink
              className="text-sm sm:text-base mt-6"
              href="/bazy-danych"
              light
            >
              Bazy danych
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabasesSection;
