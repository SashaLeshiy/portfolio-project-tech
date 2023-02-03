import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Counter } from './components/Counter'
import './styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AbouPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { ThemeContext, Theme } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/ClassNames'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App