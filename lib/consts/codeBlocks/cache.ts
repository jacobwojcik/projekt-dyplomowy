export const fetchTimeTables = `const newYorkDateTime = await fetch(
    'https://worldtimeapi.org/api/timezone/America/New_York',
    { next: { revalidate: 30 } }, // odśwież co 30 sekund
  );
  
  const warsawDateTime = await fetch(
    'https://worldtimeapi.org/api/timezone/Europe/Warsaw',
    { next: { revalidate: 10 } }, // odśwież co 10 sekund
  );;`