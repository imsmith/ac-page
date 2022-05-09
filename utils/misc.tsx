import * as dateFns from 'date-fns';

export const formatDate = (dateString: string) => {
  return dateFns.format(
    dateFns.add(dateFns.parseISO(dateString), {
      minutes: new Date().getTimezoneOffset(),
    }),
    'PPP'
  );
};
