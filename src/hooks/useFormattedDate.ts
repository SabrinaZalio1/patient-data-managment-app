import { useMemo } from 'react';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };

  
  return date.toLocaleString(undefined, options);
};

const useFormattedDate = (dateString: string) => {
  return useMemo(() => formatDate(dateString), [dateString]);
};

export default useFormattedDate;
