import { Roboto_Mono } from 'next/font/google';

const robotoFont = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={robotoFont.className}>{children}</main>
    </>
  );
}
