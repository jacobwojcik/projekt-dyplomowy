import { Roboto } from 'next/font/google';

const font = Roboto({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={font.className}>{children}</main>
    </>
  );
}
