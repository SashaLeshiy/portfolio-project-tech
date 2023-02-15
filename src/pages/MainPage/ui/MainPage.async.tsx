import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временнно для отладки лоадеров
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
