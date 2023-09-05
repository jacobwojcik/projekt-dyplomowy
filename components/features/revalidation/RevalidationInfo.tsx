import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const RevalidationInfo = () => {
  return (
    <Card className="mx-4 mt-6 max-w-7xl ">
      <CardHeader>
        <CardTitle>Statyczne generowanie a rewalidacja</CardTitle>
      </CardHeader>
      <CardContent>
        Aktualna podstrona łączy w sobie statyczną naturę z dynamicznymi
        możliwościami odświeżania treści. Strona jest regenerowana co 5 minut
        jak w przypadku ISR. Jednak w tym wypadku po dodaniu nowego zadania
        użytkownik nie zobaczy nowej treśći!
        <br />
        <br />Z pomocą przychodzi funkcja
        <code className="rounded-lg bg-zinc-100/50 px-2 py-1 text-sm text-green-500">
          &lt;revalidatePath&gt;
        </code>{' '}
        dzięki której mamy zdolność do natychmiastowej rewalidacji danych na
        żądanie. Dzięki temu, kiedy nowe zadania są dodawane, strona od razu
        poddawana jest procesowi rewalidacji, a zmiany stają się widoczne dla
        użytkowników niemalże natychmiastowo.
      </CardContent>
    </Card>
  );
};

export default RevalidationInfo;
