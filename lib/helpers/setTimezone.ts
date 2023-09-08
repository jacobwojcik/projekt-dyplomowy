import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export const setTimezone = (time: string) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const initialDatetimeUtc = dayjs(time).utc();

  const datetimeGmtPlus2 = initialDatetimeUtc.tz('Europe/Belgrade');
  return datetimeGmtPlus2.format();
};
