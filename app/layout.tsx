import './globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Toaster } from '@/components/ui/Toaster';

const font = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

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
    <html lang="en" className={`${font.variable}`}>
      <body className={` min-h-screen`}>
        <Header />
        <main className="">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
