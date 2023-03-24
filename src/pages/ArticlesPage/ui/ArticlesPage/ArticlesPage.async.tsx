import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временнно для отладки лоадеров
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
