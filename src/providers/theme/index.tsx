import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}

export default ThemeProvider
