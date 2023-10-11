import { Roboto_Mono } from 'next/font/google';
import Script from 'next/script';

const robotoFont = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'fallback',
  preload: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={robotoFont.className}>{children}</main>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              const end = Date.now() + 1000;  
              while (Date.now() < end) {
                  // Block thread for 1 second
              }
              console.log('Zewnętrzny skrypt został zakończony!');
              `,
        }}
      ></Script>
    </>
  );
}
