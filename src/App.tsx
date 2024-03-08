import { BrowserRouter } from 'react-router-dom'
import { Normalize } from 'styled-normalize'

import { SnackContextProvider } from './contexts/SnackContext'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'
import { Theme } from './styles/Theme'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <SnackContextProvider>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </SnackContextProvider>
      </Theme>
    </BrowserRouter>
  )
}
