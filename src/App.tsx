import { ThemeProvider } from "styled-components"
import { Button } from "./Components/Button"
import { defaultTheme } from "./styles/default"



export function App() {
  return (
   
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="danger"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button/>
    </ThemeProvider>
   
  )
}

