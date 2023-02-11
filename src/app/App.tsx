import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/ui'
import { classNames } from 'shared/lib/classNames/ClassNames'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/nav-bar'

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar/>
      <AppRouter />
    </div>
  )
}

export default App