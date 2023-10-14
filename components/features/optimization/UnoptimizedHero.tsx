'use client';

import React, { useEffect, useState } from 'react';

const UnoptimizedHero = () => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setImgSrc(
        'https://www.transparentpng.com/download/seo-png/seo-free-download-4.png'
      );
    }, 2000);
  }, []);

  return (
    <div className="mx-4 flex flex-col gap-6 md:col-span-1">
      <div className="grid w-full grid-cols-1 rounded-lg border border-zinc-200 p-4 text-center md:grid-cols-3">
        <div className="col-span-1 flex flex-col justify-center">
          <h1 className="mb-2 text-2xl font-semibold">Czego nie robić?</h1>
          <span className="text-xs sm:text-base">
            Aktualna strona jest przykładem tego jak{' '}
            <span className="font-semibold">NIE</span> budować nowoczesnych
            witryn internetowych. Złe praktyki są widoczne już na pierwszy rzut
            oka. Słabe user experience (doświadczenia użytkownika) jest
            spowodowane prze długie wczytywanie treści. Poniżej znajdziesz
            wyniki testów SEO, które są powszechnie używanymi metrykami do
            określania wydajności stron internetowych.
          </span>
        </div>
        <div className="col-span-2 mx-auto flex w-full sm:w-2/3 flex-col items-center justify-center gap-6 h-[400px] sm:h-auto">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img className="rounded-lg md:h-[260px] h-[320px]" src={imgSrc}></img>
        </div>
      </div>
    </div>
  );
};

export default UnoptimizedHero;
