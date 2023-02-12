import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/ui'
import { classNames } from 'shared/lib/classNames/ClassNames'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/nav-bar'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
      <NavBar/>
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
      
    </div>
  )
}

export default App