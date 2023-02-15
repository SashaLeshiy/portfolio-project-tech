import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временнно для отладки лоадеров
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
