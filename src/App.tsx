import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContexProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContexProvider>
          <Router />
        </CyclesContexProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
