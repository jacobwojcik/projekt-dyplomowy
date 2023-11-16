import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Code from '@/components/ui/Code';
import ExternalLink from '@/components/ui/ExternalLink';

const DatabasesCard = () => {
  return (
    <Card className="mx-4 mt-6 max-w-7xl xl:mx-0 ">
      <CardHeader>
        <CardTitle>Bazy danych</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p>
          Jak wybrać bazę danych do aplikacji Next.js? Wybierz odpowiednią do
          twoich potrzeb! Next.js doskonale nadaje się do współpracy z bazami
          relacyjnymi, dokumentowymi czy nawet grafowymi. Wybór należy do
          Ciebie! W tej aplikacji wykorzystana została relacyjna baza danych{' '}
          <Code>PostgreSQL</Code> wykorzystana za pośrednictwem platformy{' '}
          <ExternalLink href={'https://supabase.com/'}>Supabase</ExternalLink>.
          Poniżej znajdziesz przykład połączenia się do niej za pośrednictwem
          aplikacji Next.js a także przykłady wykorzystania.
        </p>
      </CardContent>
    </Card>
  );
};

export default DatabasesCard;
