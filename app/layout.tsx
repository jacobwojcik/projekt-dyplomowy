import './globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jak tworzyć aplikacje webowe?',
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
      <body className={`${font.className} min-h-screen`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
