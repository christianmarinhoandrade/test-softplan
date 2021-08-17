import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  from
} from '@apollo/client'
import { ServerError } from '@apollo/client/link/utils/throwServerError'
import { onError } from '@apollo/client/link/error'

import store from 'store'
import { setLoad } from 'store/spinner/action'

import { Action } from 'redux'
import { toast } from 'react-toastify'

const httpLink = new HttpLink({
  uri: 'http://testefront.dev.softplan.com.br/'
})

const middlewareError = onError(({ networkError }) => {
  const nwError = networkError as ServerError
  if (nwError.statusCode === 400) {
    toast.error('Erro inesperado.')
  }

  setLoading(false)
})

const middlewareRequest = new ApolloLink((operation, forward) => {
  setLoading(true)
  return forward(operation).map((response) => {
    setLoading(false)
    return response
  })
})

const setLoading = (load: boolean) => {
  store.dispatch<Action & { payload: { load: boolean } }>(setLoad(load))
}

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([middlewareRequest, middlewareError, httpLink])
})
