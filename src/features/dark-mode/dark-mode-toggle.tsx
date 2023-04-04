'use client';

// import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi2/index';

import { useIsClient } from '@/hooks/use-is-client';

export const DarkModeToggle = () => {
  const { setTheme, resolvedTheme: theme } = useTheme();

  const isClient = useIsClient();

  if (!isClient) return null;

  const Icon = theme === 'dark' ? HiSun : HiMoon;

  const onClick = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div>
      <button onClick={onClick}>
        <Icon size="1.5em" />
      </button>
    </div>
  );
};
