export const imgComponent = `// źle ❌
<img src="/image.png"  width={420} height={120} />

//dobrze ✅
import Image from 'next/image';

<Image 
    alt="My image"
    width={420}
    height={120}
    src="/image.png"
/>
`


export const preloadFont = `<link rel="preload" href="font_path.woff" as="font">`


export const nextFontGoogle = `import { Roboto_Mono } from 'next/font/google';

const robotoFont = Roboto_Mono({
  subsets: ['latin'],
  display: 'fallback',
  preload: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <main className={robotoFont.className}>{children}</main>
  );
}`


export const nextScripts = `// źle ❌
<script src="https://example.com/script.js" />

//dobrze ✅
import Script from 'next/script'

<Script 
  src="https://example.com/script.js" 
  strategy="beforeInteractive" | "afterInteractive" | "lazyOnload" | "worker"
/>

/*
* beforeInteractive - skrypt zostaje załadowany zanim strona stanie się interaktywna
* afterInteractive - skrypt zostanie załadowany wcześnie, ale po tym gdy część strony stanie się interaktywna
* lazyOnload - załadowanie nastąpi po zakończeniu ładowania strony
* worker - (aktualnie wartość eksperymentalna) przeniesienie ładowania skryptu do Web Workera
*/

`


export const dynamicLoading = `// źle ❌
import MyDynamicComponent from '../MyDynamicComponent'

//dobrze ✅
import dynamic from 'next/dynamic'

const MyDynamicComponent= dynamic(() => import('../MyDynamicComponent'))`
