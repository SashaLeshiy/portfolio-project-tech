import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временнно для отладки лоадеров
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1500);
}));
