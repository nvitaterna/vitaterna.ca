import { useIsClient } from '@/hooks/use-is-client';

interface FormattedDateProps {
  date: string;
}

export const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  const dateObject = new Date(date);
  const isClient = useIsClient();

  let m = '' + dateObject.getMonth() + 1;
  let d = '' + dateObject.getDate();
  const y = '' + dateObject.getFullYear();

  if (m.length < 2) {
    m = '0' + m;
  }

  if (d.length < 2) {
    d = '0' + d;
  }

  const formattedDate = `${y}-${m}-${d}`;

  if (isClient) {
    return <time>{formattedDate}</time>;
  } else {
    return (
      <span className="block h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4" />
    );
  }
};
