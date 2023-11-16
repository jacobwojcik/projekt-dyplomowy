import React from 'react';

import { ButtonLink } from '../../ui/ButtonLink';
import Image from 'next/image';
import QuizImg from './QuizImg';

const QuizSection = () => {
  return (
    <div className="flex min-h-[660px] flex-col items-center justify-center bg-white px-4 py-8">
      <div className="flex flex-col md:grid md:grid-cols-2 max-w-5xl">
        <div>
          <h2 className="text-center text-3xl font-semibold">
            Sprawdź swoją wiedzę w quizie!
          </h2>
          <div className="flex flex-col items-center my-5 p-6 max-w-5xl">
            <span className="text-center">
              Czy jesteś gotów sprawdzić swoją wiedzę na temat technik używanych
              w nowoczesnych aplikacjach? Ten quiz został przygotowany, aby
              pomóc Ci podsumować i ocenić informacje, które tutaj poznałeś.
              Przejdź dalej i zobacz, jak dobrze sobie poradzisz!
            </span>

            <ButtonLink
              className="text-sm sm:text-base mt-6"
              href="/test-wiedzy"
            >
              Rozpocznij quiz
            </ButtonLink>
          </div>
        </div>

        <div className="flex justify-center">
          <QuizImg />
        </div>
      </div>
    </div>
  );
};

export default QuizSection;
