import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { ApolloProvider } from '@apollo/client'
import { client } from 'graphql/config/config-graphql'

import Providers from 'providers'
import { Provider as ProviderRedux } from 'react-redux'
import store from './store'

import GlobalStyle from 'styles'

import Routes from 'routes'

function App() {
  return (
    <ProviderRedux store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Providers>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Providers>
        </BrowserRouter>
      </ApolloProvider>
    </ProviderRedux>
  )
}

export default App
