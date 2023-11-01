import QuizComponent from '@/components/features/quiz/QuizComponent';
import SectionNavigation from '@/components/shared/SectionNavigation';

export const dynamic = 'force-static';

export default async function Page() {
  return (
    <main className="mx-auto my-6 max-w-7xl">
      <div className="mx-4 flex flex-col gap-6 md:col-span-1 xl:mx-0">
        <div className="flex flex-col justify-center items-center my-6">
          <h1 className="mb-2 text-2xl font-semibold text-center">
            Quiz wiedzy
          </h1>
          <span className="max-w-2xl text-center">
            Test składa się z 10 pytań na temat tworzenia nowoczesnych aplikacji
            webowych z użyciem Next.js. Będziesz mógł go później powtórzyć!
          </span>
        </div>

        <QuizComponent />
      </div>

      <SectionNavigation
        navOptions={{
          prevHref: '/',
          prevName: 'Wróć na stronę główną',
        }}
      />
    </main>
  );
}
