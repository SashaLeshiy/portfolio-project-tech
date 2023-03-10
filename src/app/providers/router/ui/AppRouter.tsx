import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map((item) => (
      <Route
        key={item.path}
        path={item.path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
              {item.element}
            </div>
          </Suspense>
        )}
      />
    ))}
  </Routes>
);
