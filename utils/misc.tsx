import { parseISO, format, add } from 'date-fns';

export const formatDate = (dateString: string) => {
  return format(
    add(parseISO(dateString), {
      minutes: new Date().getTimezoneOffset()
    }),
    'PPP'
  );
};
