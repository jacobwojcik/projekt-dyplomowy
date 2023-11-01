import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Link from 'next/link';
import PageRefresh from '../rendering/PageRefresh';

const RevalidationInfo = () => {
  return (
    <Card className="mx-4 my-6 max-w-7xl ">
      <CardHeader>
        <CardTitle>Statyczne generowanie a rewalidacja</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Statycznie wygenerowane strony mają swoje korzyści, takie jak szybkość
          ładowania. Jednak przynosi to ograniczenia związane z problemem
          odświeżania treści. Z pomocą przychodzi rewalidacja czyli ponowne
          wygenerowanie strony.
        </p>
        <p className="mb-2">
          Poza{' '}
          <Link href={'/renderowanie/cache'} className="font-medium underline">
            odświeżaniem opartym na czasie
          </Link>{' '}
          można skorzystać również z rewalidacji na żądanie. Podstrona na której
          się znajdujesz zostałą wygenerowana statycznie oraz jest rewalidowana
          co 5 minut. Odśwież stronę aby sprawdzić czas (widoczny poniżej) o
          której została wygenerowana ostatnia wersja. Po ponownym odświeżeniu
          czas nie powinien się zmienić (kolejna wersja zostanie wygenerowana za
          5 minut).
        </p>
        <PageRefresh />
        <p className="mt-2">
          W tym przypadku dobrym pomysłem byłaby dodatkowa rewalidacja na
          żądanie, które zostałaby wykonana podczas dodawania nowego zadania.
          Dzięki temu nowa wersja będzie zawierała również najnowsze zadanie!
          Spróbuj je teraz dodać.
        </p>
      </CardContent>
    </Card>
  );
};

export default RevalidationInfo;
