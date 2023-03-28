// import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi2/index';

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

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
