import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import { uiSlice } from './ui-slice';

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<{}>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
