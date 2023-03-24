import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';

import { IconButton } from '@/components/icon-button';

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const Icon = theme === 'dark' ? SunIcon : MoonIcon;

  const onClick = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div>
      <IconButton className="h-8 w-8" onClick={onClick}>
        <Icon />
      </IconButton>
    </div>
  );
};
