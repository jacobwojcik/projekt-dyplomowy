import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const PossibilitiesCard = () => {
  return (
    <Card className="mx-4 mt-6 max-w-7xl xl:mx-0 ">
      <CardHeader>
        <CardTitle>Jakie możliwości daje Next 13?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          Domyślnie, pobrane dane są przechowywane w pamięci podręcznej serwera.
          Mogą być pobrane podczas tworzenia strony lub obsługi konkretnego
          żądania a następnie przechowywane, aby można było je wielokrotnie
          wykorzystywać przy kolejnych żądaniach dotyczących tych danych.
        </p>
        <div>
          <p>
            Dane przechowywane w pamięci podręcznej mogą być rewalidowane
            (odświeżane) na dwa sposoby:
          </p>
          <ul className="ml-6 list-disc">
            <li>
              <span className="font-medium text-green-600">
                Time-based (oparte na czasie){' '}
              </span>{' '}
              - nowe dane są pobierane po upływie ustalonego czasu, na przykład
              dla danych które rzadko się zmieniają
            </li>
            <li>
              <span className="font-medium text-green-600">
                On-demand (na żądanie)
              </span>{' '}
              - na przyład podczas przesłania formularza{' '}
            </li>
          </ul>
        </div>
        <p>
          Dzięki wykorzystaniu komponentów serwerowych{' '}
          <span className="font-medium">każde </span> żądanie może być
          rewalidowane niezależnie od innych. Można to wykorzystać np. gdy
          artykuły zmieniają się co godzine a produkty co minutę.
        </p>

        <p>
          W poniższym przykładzie czas, który pobierany jest z zewnętrznego API,
          w Nowym Jorku odświeżany jest co 30 sekund, natomiast czas w Warszawie
          co 10 sekund, aby zaobserwować te zmiany odśwież stronę.{' '}
        </p>
      </CardContent>
    </Card>
  );
};

export default PossibilitiesCard;
