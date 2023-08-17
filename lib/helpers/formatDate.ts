export const formatDate = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
