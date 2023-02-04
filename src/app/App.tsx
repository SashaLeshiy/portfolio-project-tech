import { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/ui'
import { classNames } from 'shared/lib/classNames/ClassNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App