// import { Roboto_Mono } from 'next/font/google';

// const robotoFont = Roboto_Mono({
//   subsets: ['latin'],
//   variable: '--font-roboto-mono',
//   display: 'fallback',
//   preload: true,
// });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
