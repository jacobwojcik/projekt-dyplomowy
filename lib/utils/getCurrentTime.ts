export const getCurrentTime = async (config: RequestInit) => {
  try {
    const res = await fetch(
      'https://worldtimeapi.org/api/timezone/Poland',
      config,
    );
    const currentTime = await res.json();
    return currentTime;
  } catch (e: unknown) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
  return undefined;
};
