import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from './store';

interface UiState {
  darkMode: boolean;
}

const initialState: UiState = {
  darkMode: false,
};

interface ToggleDarkModeArgs {
  darkMode: boolean;
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = uiSlice.actions;

export const getDarkMode = (state: RootState) => state.ui.darkMode;
