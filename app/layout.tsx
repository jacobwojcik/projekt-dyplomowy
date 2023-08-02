import './globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from '@/components/Header';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aplikacja Next.js',
  description:
    'Tworzenie i optymalizacja nowoczesnych aplikacji webowych przy użyciu Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main className="mx-auto max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
