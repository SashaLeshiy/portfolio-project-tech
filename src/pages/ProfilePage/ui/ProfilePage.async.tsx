import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // временнно для отладки лоадеров
  setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
