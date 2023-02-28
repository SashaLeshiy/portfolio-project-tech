import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/ClassNames';
import { NavBar } from 'widgets/nav-bar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider/ui';
import { AppRouter } from './providers/router';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
