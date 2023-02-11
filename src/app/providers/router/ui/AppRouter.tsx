import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'


export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='AppRouter'>
      <Routes>
          {Object.values(routeConfig).map(item=> (
          <Route key={item.path} element={item.element} path={item.path}/>
          ))}
      </Routes>
      </div>
    </Suspense>
  )
}

// export default AppRouter