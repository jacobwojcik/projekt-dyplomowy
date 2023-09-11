export const formatTime = (dateTimeString: string) => {
  const hours = dateTimeString.slice(11, 13);
  const minutes = dateTimeString.slice(14, 16);
  const seconds = dateTimeString.slice(17, 19);

  return `${hours}:${minutes}:${seconds}`;
};
