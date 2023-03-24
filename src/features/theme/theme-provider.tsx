import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import React, { useMemo } from 'react';

import { useAppSelector } from '@/store/hooks';
import { getDarkMode } from '@/store/ui-slice';

import { createTheme } from './theme';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const darkMode = useAppSelector(getDarkMode);
  const mode = darkMode ? 'dark' : 'light';

  const theme = useMemo(() => createTheme(mode), [mode]);

  console.log(theme);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};
