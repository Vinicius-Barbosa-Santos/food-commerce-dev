import { Route,Routes } from 'react-router-dom'

import MainPage from './pages/Main'
import { BurgerPage } from './pages/Main/Burguers'
import { PizzasPages } from './pages/Main/Pizzas'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgerPage />} />
        <Route path='/pizzas' element={<PizzasPages />} />
      </Route>
    </Routes>
  )
}
