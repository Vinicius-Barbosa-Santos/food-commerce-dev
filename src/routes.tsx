import { Route,Routes } from 'react-router-dom'

import MainPage from './pages/Main'
import { BurgerPage } from './pages/Main/Burguers'
import { DrinksPages } from './pages/Main/Drinks'
import { IceCreamsPages } from './pages/Main/Ice-Creams'
import { PizzasPages } from './pages/Main/Pizzas'
import { MyCart } from './pages/MyCart'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgerPage />} />
        <Route path='/pizzas' element={<PizzasPages />} />
        <Route path='/drinks' element={<DrinksPages />} />
        <Route path='/ice-creams' element={<IceCreamsPages />} />
      </Route>
      <Route path='/cart' element={<MyCart />} />
    </Routes>
  )
}
