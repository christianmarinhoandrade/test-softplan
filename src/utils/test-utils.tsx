import { ReactElement } from 'react'
import { render } from '@testing-library/react'

import { Provider as ProviderRedux } from 'react-redux'
import store from 'store'

import ThemeProvider from 'providers/theme'

const customRender = (ui: ReactElement) =>
  render(
    <ProviderRedux store={store}>
      <ThemeProvider>{ui}</ThemeProvider>
    </ProviderRedux>
  )

export * from '@testing-library/react'
export { customRender as render }
