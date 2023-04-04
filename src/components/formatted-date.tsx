'use client';

interface FormattedDateProps {
  date: string;
}

export const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  const dateObject = new Date(date);
  let m = '' + (dateObject.getMonth() + 1);
  let d = '' + dateObject.getDate();
  const y = '' + dateObject.getFullYear();

  if (m.length < 2) {
    m = '0' + m;
  }

  if (d.length < 2) {
    d = '0' + d;
  }

  const formattedDate = `${y}-${m}-${d}`;

  return <time className="w-20">{formattedDate}</time>;
};
