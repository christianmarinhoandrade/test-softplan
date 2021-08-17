import React from 'react'

import ThemeProvider from './theme'

type ProviderProps = {
  children: React.ReactNode
}
function Providers({ children }: ProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
