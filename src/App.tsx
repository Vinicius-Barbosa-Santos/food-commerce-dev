import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Normalize } from 'styled-normalize'

import { CartProvider } from './contexts/CartContext'
import { SnackContextProvider } from './contexts/SnackContext'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackContextProvider>
          <CartProvider>
            <AppRoutes />
            <ToastContainer autoClose={2000} />
            <GlobalStyle />
            <Normalize />
          </CartProvider>
        </SnackContextProvider>
      </Theme>
    </BrowserRouter>
  )
}
