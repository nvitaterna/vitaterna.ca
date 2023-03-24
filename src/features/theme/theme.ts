import { PaletteMode } from '@mui/material';
import { red } from '@mui/material/colors';
import {
  createTheme as MUICreateTheme,
  ThemeOptions,
} from '@mui/material/styles';
import { Roboto } from 'next/font/google';

import { LinkBehaviour } from '@/components/link-behaviour';

import { darkPalette } from './dark-palette';
import { lightPalette } from './light-palette';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.

const lightMode: ThemeOptions['palette'] = {};

const darkMode: ThemeOptions['palette'] = {
  background: {
    default: '#1A202C',
    paper: '#2D3748',
  },
  // secondary: {
  //   main:
  // }
};

export const createTheme = (mode: PaletteMode) => {
  // let palette = lightPalette;
  // if (mode === 'dark') {
  //   palette = darkPalette;
  // }
  return MUICreateTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
      button: {
        textTransform: 'none',
        fontWeight: 'default',
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehaviour,
        } as any,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehaviour,
        },
      },
    },
  });
};
